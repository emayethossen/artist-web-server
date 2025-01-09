import express, { Application, Request, Response } from "express";
import cors from "cors";

import {
  errorHandler,
  notFoundHandler,
} from "./app/middlewares/error.middleware";
import bodyParser from "body-parser";
import { WorkCard } from "./app/modules/workcard/router";
import path from "path";
import { feedbackRoutes } from "./app/modules/feedback/routes";

const app: Application = express();

// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "1mb" }));
app.use(bodyParser.urlencoded({ limit: "1mb", extended: true }));
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/api/workcards", WorkCard);
app.use("/api/feedbacks", feedbackRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Not Found handler
app.use(notFoundHandler);

// Error Handler
app.use(errorHandler);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: "Not Found",
  });
});

export default app;
