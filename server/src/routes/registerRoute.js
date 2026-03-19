const express = require("express");
const { register, login } = require("../controller/registerController");

const app = express();

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
