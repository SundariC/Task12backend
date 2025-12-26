import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import authRoute from "./Routes/authRoute.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://task12frontend.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to Backend 🚀");
});

app.use("/api/auth", authRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
