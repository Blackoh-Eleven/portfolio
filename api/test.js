import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/weather-key", (req, res) => {
  res.json({ key: process.env.API_KEY });
});

app.listen(3000, () => console.log("Server running on port 3000"));