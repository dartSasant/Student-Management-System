const Admin = require("../model/registerModel");

const register = async (req, res) => {
  try {
    
    const { username, password } = req.body;

    const userExists = Admin.findOne({ username });

    if (!userExists) {
      return res.status(401).json({
        messaage: `User already exists`,
        success: false,
      });
    }

    const user = new Admin({ username, password });
    const savedUser = await user.save();

    return res.status(200).json(savedUser);

  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error: ${error.message}`,
      status: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(401).json({
        message: `Fill out all the feilds`,
        success: false,
      });
    }
  } catch (error) {}
};

module.exports = {
  register,
  login,
};
