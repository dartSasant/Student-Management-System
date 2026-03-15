const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectToDatabase = async (req, res) => {
  try {
    await mongoose.connect(
      process.env.DB_URL,
      console.log("Connected to database"),
    );
  } catch (error) {
    console.log(`Error connecting to database ${error}`);
    process.exit(1); // 1 means exit wth failure
  }
};

module.exports = connectToDatabase;
