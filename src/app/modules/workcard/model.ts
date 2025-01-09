import mongoose, { Schema, Document } from "mongoose";

interface IWorkCard extends Document {
  image: string; // Image URL
  title: string;
  tags: string[];
}

const WorkCardSchema: Schema = new Schema(
  {
    image: { type: String, required: true }, // Store image URL
    title: { type: String, required: true },
    tags: { type: [String], required: true },
  },
  { timestamps: true }
);

const WorkCard = mongoose.model<IWorkCard>("WorkCard", WorkCardSchema);

export default WorkCard;
