require("dotenv").config();
const connectToDatabase = require("./src/config/db");
const express = require("express");
const app = express();
const authRoutes = require("./src/routes/registerRoute");

connectToDatabase();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
