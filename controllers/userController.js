import User from "../models/userModel.js";

// ✅ Admin: Get all users
export const getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

// ✅ Admin: Update user role
export const updateUserRole = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).json({ message: "User not found" });

  user.role = req.body.role || user.role;
  await user.save();

  res.json({ message: "User role updated", user });
};
