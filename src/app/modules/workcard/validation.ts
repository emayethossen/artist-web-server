import { z } from "zod";

export const workCardValidationSchema = z.object({
  image: z.string().url("Invalid URL format for the image").nonempty("Image URL is required"),
  title: z.string().min(3, "Title should be at least 3 characters long"),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
});
