import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validateZod =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      res.status(400).json({ success: false, message: "Validation error", error });
    }
  };
