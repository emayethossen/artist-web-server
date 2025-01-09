import { Request, Response } from "express";
import FeedbackModel from "./model";
import { feedbackValidation, feedbackUpdateValidation } from "./validation";

export const getAllFeedbacks = async (req: Request, res: Response) => {
    try {
        const feedbacks = await FeedbackModel.find();
        res.status(200).json({ success: true, data: feedbacks });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch feedbacks.", error });
    }
};

export const createFeedback = async (req: Request, res: Response) => {
    try {
        const validatedData = feedbackValidation.parse(req.body);

        const newFeedback = await FeedbackModel.create(validatedData);
        res.status(201).json({ success: true, data: newFeedback });
    } catch (error) {
        res.status(400).json({ success: false, message: "Validation Error", error });
    }
};

export const updateFeedback = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const validatedData = feedbackUpdateValidation.parse(req.body);

        const updatedFeedback = await FeedbackModel.findByIdAndUpdate(id, validatedData, { new: true });
        if (!updatedFeedback) {
            return res.status(404).json({ success: false, message: "Feedback not found." });
        }
        res.status(200).json({ success: true, data: updatedFeedback });
    } catch (error) {
        res.status(400).json({ success: false, message: "Validation Error", error });
    }
};

export const deleteFeedback = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedFeedback = await FeedbackModel.findByIdAndDelete(id);
        if (!deletedFeedback) {
            return res.status(404).json({ success: false, message: "Feedback not found." });
        }
        res.status(200).json({ success: true, message: "Feedback deleted successfully." });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to delete feedback.", error });
    }
};
