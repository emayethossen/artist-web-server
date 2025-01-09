import { z } from "zod";

export const feedbackValidation = z.object({
    image: z.string().url("Image must be a valid URL."),
    description: z.string().min(10, "Description must be at least 10 characters."),
    companyName: z.string().min(2, "Company name must be at least 2 characters."),
    name: z.string().min(2, "Name must be at least 2 characters."),
});

export const feedbackUpdateValidation = feedbackValidation.partial();
