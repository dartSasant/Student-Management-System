const express = require("express");
const { login } = require("../controller/adminLogin");

const router = express.Router();

app.post("/", login);

module.exports = router;
