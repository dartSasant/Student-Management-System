require("dotenv").config();
const { connect } = require("mongoose");
const connectToDatabase = require("./src/config/db");
const { login } = require("./src/controller/adminLogin");

const express = require("express");
const app = express();

connectToDatabase();

const PORT = process.env.PORT || 3000;

app.use("/api/login", login);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
