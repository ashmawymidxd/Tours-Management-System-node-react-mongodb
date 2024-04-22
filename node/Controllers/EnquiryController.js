const Enquiry = require("../Databases/Models/Enquiry");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const secret = "asdfe45we45w345wegw345werjktjwertkj";

const createEnquiry = async (req, res) => {
  const { name, email, phone, subject, description } = req.body;
  const enquiry = new Enquiry({ name, email, phone, subject, description });
  try {
    await enquiry.save();
    res.status(201).send(enquiry);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res.status(200).send(enquiries);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
};

const getEnquiry = async (req, res) => {
  const { id } = req.params;
  try {
    const enquiry = await Enquiry.findById(id);
    if (!enquiry) {
      return res.status(404).send({ message: "Enquiry not found" });
    }
    res.status(200).send(enquiry);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
};

const deleteEnquiry = async (req, res) => {
  const { id } = req.params;
  try {
    const enquiry = await Enquiry.findByIdAndDelete(id);
    if (!enquiry) {
      return res.status(404).send({ message: "Enquiry not found" });
    }
    res.status(200).send(enquiry);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
};

async function getUserEnquirys(req, res) {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    try {
      const enquiries = await Enquiry.find({ email: info.email });
      res.json(enquiries);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
}

module.exports = {
  createEnquiry,
  getEnquiries,
  getEnquiry,
  deleteEnquiry,
  getUserEnquirys,
};
// Path: api/Routes/EnquiryRoutes.js
