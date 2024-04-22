// import user model
const User = require("../Databases/Models/User");
const bcrypt = require("bcryptjs");
const salt = 10;
const jwt = require("jsonwebtoken");
const secret = "asdfe45we45w345wegw345werjktjwertkj";

async function register(req, res) {
  const { username, password, email } = req.body;
  try {
    const userDoc = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
}

// async function login(req, res) {
//   const { email, password } = req.body;
//   const userDoc = await User.findOne({ email });
//   const passOk = bcrypt.compareSync(password, userDoc.password);
//   if (passOk) {
//     jwt.sign(
//       {
//         email,
//         username: userDoc.username,
//         id: userDoc._id,
//         role: userDoc.role,
//         created_at: userDoc.created_at,
//       },
//       secret,
//       {},
//       (err, token) => {
//         if (err) throw err;
//         res.cookie("token", token).json({
//           id: userDoc._id,
//           username: userDoc.username,
//           role: userDoc.role,
//           created_at: userDoc.created_at,
//           email,
//         });
//       }
//     );
//   } else {
//     res.status(400).json("wrong credentials");
//     return;
//   }
// }

async function login(req, res) {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (!userDoc) {
    return res.status(400).json({ message: "User not found" });
  }
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign(
      {
        email,
        username: userDoc.username,
        id: userDoc._id,
        role: userDoc.role,
        created_at: userDoc.created_at,
      },
      secret,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          id: userDoc._id,
          username: userDoc.username,
          role: userDoc.role,
          created_at: userDoc.created_at,
          email,
        });
      }
    );
  } else {
    res.status(400).json("Wrong credentials");
  }
}
async function updateProfile(req, res) {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { username, email } = req.body;
    if (!username || !email) {
      return res.status(400).json({ error: "Username and email are required" });
    }

    try {
      const userDoc = await User.findById(info.id);
      if (!userDoc) {
        return res.status(404).json({ error: "User not found" });
      }

      userDoc.username = username;
      userDoc.email = email;
      await userDoc.save();
      res.json(userDoc);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
}

async function updatePassword(req, res) {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res
        .status(400)
        .json({ error: "Current password and new password are required" });
    }

    try {
      const userDoc = await User.findById(info.id);
      if (!userDoc) {
        return res.status(404).json({ error: "User not found" });
      }

      const passOk = bcrypt.compareSync(currentPassword, userDoc.password);
      if (!passOk) {
        return res.status(400).json({ error: "Current password is incorrect" });
      }

      userDoc.password = bcrypt.hashSync(newPassword, salt);
      await userDoc.save();
      res.json(userDoc);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
}

function profile(req, res) {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) {
      res.status(401).json({ error: "Unauthorized" });
    }
    res.json(info);
  });
}

async function getAllUsers(req, res) {
  const users = await User.find();
  res.json(users);
}


function logout(req, res) {
  res.cookie("token", "").json("ok");
}

module.exports = {
  register,
  login,
  profile,
  logout,
  updateProfile,
  updatePassword,
  getAllUsers,
};
