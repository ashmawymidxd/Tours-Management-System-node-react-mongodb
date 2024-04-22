// connect to db
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/TMS", {
}).then(() => console.log("connected to db done..")).catch((err) => console.log(err));