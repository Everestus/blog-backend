import express from "express";
import commentRoutes from "./commentRoutes.js";
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/")
  .get(getPosts)                 // Public: view all posts
  .post(protect, createPost);    // Authenticated: create post

router.route("/:id")
  .get(getPostById)              // Public: view single post
  .put(protect, updatePost)      // Only author or admin (checked in controller)
  .delete(protect, deletePost);  // Only author or admin (checked in controller)
  router.use("/:postId/comments", commentRoutes);

export default router;
