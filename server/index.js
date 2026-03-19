require("dotenv").config();
const connectToDatabase = require("./src/config/db");
const express = require("express");
const app = express();
const register = require("./src/routes/registerRoutes");

connectToDatabase();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/api", register);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
