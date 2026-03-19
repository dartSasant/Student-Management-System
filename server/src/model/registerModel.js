const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const register = mongoose.model("register", registerSchema);

module.exports = register;
