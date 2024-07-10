const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 5000;

const questionRoutes = require("./routes/questions");

app.use(cors());
app.use(express.json());

app.use("/api/questions", questionRoutes);

mongoose
  .connect("mongodb://localhost:27017/quiz", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
