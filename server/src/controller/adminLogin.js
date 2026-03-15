const Admin = require("../model/admin_login");

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = new Admin({ userName, password });
    const savedUser = await user.save();

    return res.status(200).json(savedUser);
  } catch (error) {
    res.status.json({
      message: `Error creating user`,
      status: false,
    });
  }
};

module.exports = {
  login,
};
