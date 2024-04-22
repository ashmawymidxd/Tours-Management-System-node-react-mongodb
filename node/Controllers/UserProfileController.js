// import user model
const User = require("../Databases/Models/User");
const bcrypt = require("bcryptjs");
const salt = 10;
const jwt = require("jsonwebtoken");
const secret = "asdfe45we45w345wegw345werjktjwertkj";

const profileImageUpload = async (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { path, originalname } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);
    const userDoc = await User.findByIdAndUpdate(info.id, { profile: newPath });
    res.json(userDoc);
  });
};

const updateProfile = async (req, res) => {
  const { id } = request.params;
  const { username, email } = request.body;
  const user = await User.findByIdAndUpdate(id, {
    username,
    email,
  });
  response.send(user);
};

const updatePassword = async (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, salt);
    const userDoc = await User.findByIdAndUpdate(info.id, {
      password: hashedPassword,
    });
    res.json(userDoc);
  });
};

module.exports = {
  profileImageUpload,
  updateProfile,
  updatePassword,
};
