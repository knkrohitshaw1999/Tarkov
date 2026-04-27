const express = require("express");
const User = require("../models/User");
const { protect, admin } = require("../middleware/authMiddleware");
const router = express.Router();

//@route GET /api/admin/users
//@desc Get all users (Admin only)
//access Private/Admin
router.get("/users", protect, admin, async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//@route POST /api/admin/users
//@desc Create a new user (Admin only)
//access Private/Admin
router.post("/users", protect, admin, async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    user = new User({
      name,
      email,
      password,
      role: role || "customer",
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//@route Put /api/admin/users/:id
//@desc Update a user (Admin only)
//access Private/Admin
router.put("/users/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.role = req.body.role || user.role;

    const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

//@route Delete /api/admin/users/:id
//@desc Delete a user (Admin only)
//access Private/Admin
router.delete("/users/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.deleteOne();

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
