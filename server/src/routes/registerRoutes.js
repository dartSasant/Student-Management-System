const express = require("express");
const { register } = require("../controller/registerController");

const app = express();

const router = express.Router();

router.post("/register", register);

module.exports = router;
