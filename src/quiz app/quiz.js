import React, { useState, useEffect } from "react";
import "./quiz.css";
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "who is known as father of computer?",
    options: ["charles babage", "billgates", "james", "dennis "],
    answer: "charles babage",
  },
  {
    question: "what is known as temperory memory or volatile memory",
    options: ["SSD", "HDD", "RAM", "ROM "],
    answer: "RAM",
  },
  {
    question: "how many elements are in water",
    options: ["1", "3", "2", "8 "],
    answer: "2",
  },
];

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQstns] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];

    const isCorrect = selectedOption === currentQuestion.answer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setAnsweredQstns([
      ...answeredQuestions,
      { question: currentQuestion.question, isCorrect },
    ]);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnsweredQstns([]);
    setQuizCompleted(false);
  };

  return (
    <div className="quiz-container">
      {!quizCompleted ? (
        <div className="question-container">
          <h2>{questions[currentQuestionIndex].question}</h2>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="results">
          <h2>Quiz Finished!</h2>
          <p>Your score: {score}</p>
          <div className="feedback">
            {answeredQuestions.map((item, index) => (
              <div key={index}>
                <p>{item.question}</p>
                <p>{item.isCorrect ? "Correct" : "Incorrect"}</p>
              </div>
            ))}
          </div>
          <button onClick={restartQuiz}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
