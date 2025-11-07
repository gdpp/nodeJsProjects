import express from "express";
import dotenv from "dotenv";
import { configureCors } from "./config/corsConfig";
import { addTimeStamp, requestLogger } from "./middlewares/customMiddleware";
import { globalErrorHandler } from "./middlewares/errorHandler";
import { createBasicRateLimiter } from "./middlewares/rateLimiting";
import { router as itemRoutes } from "./routes/item-routes";

dotenv.config({ path: ".env" });

const app = express();
const PORT = process.env.PORT;

app.use(requestLogger);
app.use(addTimeStamp);
app.use(configureCors());
app.use(express.json());

app.use("/api/v1", itemRoutes);
app.use(globalErrorHandler);
app.use(createBasicRateLimiter(100, 15 * 60 * 1000)); // 100 req for 15 minutes

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
