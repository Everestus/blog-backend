import express from "express";
import {
  registerUser,
  loginUser,
  requestPasswordReset,
  resetPassword,
} from "../controllers/authController.js";

const router = express.Router();

// Auth
router.post("/register", registerUser);
router.post("/login", loginUser);

// Password Reset
router.post("/forgot-password", requestPasswordReset); // user submits email
router.post("/reset-password/:token", resetPassword);  // user submits new password

export default router;
