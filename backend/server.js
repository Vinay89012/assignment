const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const expressRoutes = require("./routes/expressRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/expenses", (req, res) => {
  res.status(200).json({ message: "Welcome to the Expense Tracker API" });
});

app.use("/api/expenses", expressRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
