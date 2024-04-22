const express = require("express");
const app = express();
const cors = require("cors");
// const User = require("./Databases/models/User");
// const Post = require("./Databases/models/Post");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");
const salt = bcrypt.genSaltSync(10);
const secret = "asdfe45we45w345wegw345werjktjwertkj";

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

require("./Databases/mongoose");

// import routes.
const AuthRoutes = require("./Routes/AuthRoutes");
const UserProfile = require("./Routes/UserProfileRoute");
const PackageRoutes = require("./Routes/PackageRoutes");
const BookingRoutes = require("./Routes/BookingRoutes");
const EnquiryRoutes = require("./Routes/EnquiryRoutes");
const IssuesRoutes = require("./Routes/IssuesRoutes");
const ReviewRoutes = require("./Routes/ReviewRoutes");

//use routes prefix
app.use("/api/auth/", AuthRoutes);
app.use("/api/userprofile/", UserProfile);
app.use("/api/package/", PackageRoutes);
app.use("/api/booking/", BookingRoutes);
app.use("/api/enquiry/", EnquiryRoutes);
app.use("/api/issue/", IssuesRoutes);
app.use("/api/review/", ReviewRoutes);

app.listen(4000);

