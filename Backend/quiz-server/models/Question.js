const mongoose = require("mongoose");

const answerOptionSchema = new mongoose.Schema({
  answerText: String,
  isCorrect: Boolean,
});

const questionSchema = new mongoose.Schema({
  questionText: String,
  answerOptions: [answerOptionSchema],
});

module.exports = mongoose.model("Question", questionSchema);
