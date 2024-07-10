const mongoose = require("mongoose");
const Question = require("./models/Question");

mongoose
  .connect("mongodb://localhost:27017/quiz", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    const questions = [
      {
        questionText: "What is the capital of France?",
        answerOptions: [
          { answerText: "Berlin", isCorrect: false },
          { answerText: "Madrid", isCorrect: false },
          { answerText: "Paris", isCorrect: true },
          { answerText: "Lisbon", isCorrect: false },
        ],
      },
      {
        questionText: "Who is CEO of Tesla?",
        answerOptions: [
          { answerText: "Jeff Bezos", isCorrect: false },
          { answerText: "Elon Musk", isCorrect: true },
          { answerText: "Bill Gates", isCorrect: false },
          { answerText: "Tony Stark", isCorrect: false },
        ],
      },
      // Add more questions as needed
    ];

    try {
      await Question.insertMany(questions);
      console.log("Questions seeded");
    } catch (err) {
      console.error("Error seeding questions", err);
    } finally {
      mongoose.connection.close();
    }
  });
