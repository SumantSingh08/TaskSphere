import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./App/config/db.js";
import authRoutes from "./App/routes/authRoutes.js";
import taskRoutes from "./App/routes/taskRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
