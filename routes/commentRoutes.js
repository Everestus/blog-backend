import express from "express";
import { addComment, getComments, deleteComment } from "../controllers/commentController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router({ mergeParams: true }); 

router.route("/")
  .get(getComments)            // Public: view comments for a post
  .post(protect, addComment);  // Authenticated: add comment

router.route("/:id")
  .delete(protect, deleteComment); // Author/Admin: delete comment

export default router;
