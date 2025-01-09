import express from "express";
import { createWorkCard, updateWorkCard, deleteWorkCard, getAllWorkCards } from "./controller";

const router = express.Router();

// Create WorkCard
router.post("/", createWorkCard);

// Update WorkCard
router.put("/:id", updateWorkCard);

// Delete WorkCard
router.delete("/:id", deleteWorkCard);

// Get All WorkCards
router.get("/", getAllWorkCards);

export const WorkCard = router;
