import { Request, Response } from "express";
import WorkCard from "./model";
import { workCardValidationSchema } from "./validation";

// Create WorkCard
export const createWorkCard = async (req: Request, res: Response) => {
  try {
    const { image, title, tags } = req.body;

    // Validate request data using Zod schema
    const parsedData = workCardValidationSchema.safeParse({ image, title, tags });

    if (!parsedData.success) {
      return res.status(400).json({ success: false, errors: parsedData.error.errors });
    }

    // Create new card
    const newCard = await WorkCard.create({
      image, // Store the image URL
      title,
      tags,
    });

    return res.status(201).json({ success: true, data: newCard });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error creating work card", error });
  }
};

// Update WorkCard
export const updateWorkCard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { image, title, tags } = req.body;

    // Validate request data using Zod schema
    const parsedData = workCardValidationSchema.safeParse({ image, title, tags });

    if (!parsedData.success) {
      return res.status(400).json({ success: false, errors: parsedData.error.errors });
    }

    const updatedCard = await WorkCard.findByIdAndUpdate(
      id,
      { image, title, tags },
      { new: true }
    );

    if (!updatedCard) {
      return res.status(404).json({ success: false, message: "Work card not found" });
    }

    return res.status(200).json({ success: true, data: updatedCard });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error updating work card", error });
  }
};

// Delete WorkCard
export const deleteWorkCard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedCard = await WorkCard.findByIdAndDelete(id);

    if (!deletedCard) {
      return res.status(404).json({ success: false, message: "Work card not found" });
    }

    return res.status(200).json({ success: true, message: "Work card deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error deleting work card", error });
  }
};

// Get All WorkCards
export const getAllWorkCards = async (req: Request, res: Response) => {
  try {
    const cards = await WorkCard.find();

    return res.status(200).json({ success: true, data: cards });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error retrieving work cards", error });
  }
};
