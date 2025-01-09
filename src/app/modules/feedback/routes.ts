import express from "express";
import {
    getAllFeedbacks,
    createFeedback,
    updateFeedback,
    deleteFeedback,
} from "./controller";

const router = express.Router();

// GET all feedbacks
router.get("/", getAllFeedbacks);

// POST a new feedback
router.post("/", createFeedback);

// PUT (update) a feedback
router.put("/:id", updateFeedback);

// DELETE a feedback
router.delete("/:id", deleteFeedback);

export const feedbackRoutes = router;
