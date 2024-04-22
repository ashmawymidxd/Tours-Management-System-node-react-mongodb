const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
  username: {type: String, required: true, min: 4, unique: true},
  email: {type: String, required: true, unique: true, match: /@/},
  password: {type: String, required: true},
  role: {type: String, default: 'user'},
  created_at: {type: Date, default: Date.now},
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;