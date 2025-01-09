import mongoose, { Schema, Document } from "mongoose";
import { Feedback } from "./interface";

export interface FeedbackDocument extends Feedback, Document { }

const FeedbackSchema: Schema = new Schema<FeedbackDocument>(
    {
        image: { type: String, required: true },
        description: { type: String, required: true },
        companyName: { type: String, required: true },
        name: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model<FeedbackDocument>("Feedback", FeedbackSchema);
