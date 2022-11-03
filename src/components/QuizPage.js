import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

function QuizPage() {
  const questions = [
    {
      questionText: "Who is Prime Minister of India?",
      answerOptions: [
        { answerText: "Vijay Rupani", isCorrect: false },
        { answerText: "Manmohan singh", isCorrect: false },
        { answerText: "Narendra Modi", isCorrect: true },
        { answerText: "Deep Patel", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tata?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Ratan Tata", isCorrect: true },
        { answerText: "Mukesh Ambani", isCorrect: false },
        { answerText: "Gautam Adani", isCorrect: false },
      ],
    },
    {
      questionText: "who is richest person in the world?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Mukesh Ambani", isCorrect: false },
        { answerText: "Warren Buffett", isCorrect: false },
      ],
    },
    {
      questionText: "how many countries in the world?",
      answerOptions: [
        { answerText: "120", isCorrect: false },
        { answerText: "183", isCorrect: false },
        { answerText: "170", isCorrect: false },
        { answerText: "195", isCorrect: true },
      ],
    },
    {
      questionText: "What is the capital of Portugal?",
      answerOptions: [
        { answerText: "Porto", isCorrect: false },
        { answerText: "Viana Do Castelo", isCorrect: false },
        { answerText: "Braga", isCorrect: false },
        { answerText: "Lisbon", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [mins, setMinutes] = useState(0);
  const [secs, setSeconds] = useState(0);
  const [hrs, setHours] = useState(0);
  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (secs >= 0 && showScore === false) {
        setSeconds(secs + 1);
      }
      if (secs === 59 && showScore === false) {
        setMinutes(mins + 1);
        setSeconds(0);
      }
      if (mins === 59 && showScore === false) {
        setHours(hrs + 1);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;

    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    } else {
      setShowScore(true);
    }
  };

  const reStart = () =>{
    window.location.reload();
  }
  return (
    <>
      <Box className="app">
        {showScore ? (
          <Box
            sx={{
              color: "#000",
              fontSize: "18px",
              fontWeight: 400,
              backgroundColor: "#fff",
              padding: "100px 20px 20px 50px",
              height: "100vh",
            }}
          >
            <Typography
              sx={{
                color: "#000",
                fontSize: "22px",
                fontWeight: 500,
                paddingTop: "5px",
              }}
            >
              Your Result:
            </Typography>
            <Typography sx={{ paddingTop: "5px", paddingBottom: "5px" }}>
              {"Test Time : "}
              {hrs < 10 ? `0${hrs}` : hrs}:{mins < 10 ? `0${mins}` : mins}:
              {secs < 10 ? `0${secs}` : secs}
            </Typography>
            In this test you have{" "}
            <span style={{ fontWeight: 500 }}>
              {score} correct answers from {questions.length}{" "}
            </span>
            {score < 3 ? (
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "18px",
                  fontWeight: 400,
                  paddingTop: "5px",
                }}
              >
                This is not a very good result
              </Typography>
            ) : (
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "18px",
                  fontWeight: 400,
                  paddingTop: "5px",
                }}
              >
                This is a very good result
              </Typography>
            )}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#01537A",
                width: "150px",
                height: "30px",
                alignItems: "center",
                color: "#fff",
                marginTop: "20px",
                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "#1b7cab",
                },
              }}
              onClick={reStart}
            >
              Re-start Test
            </Button>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                backgroundColor: "#6b6fbc",
                padding: "100px 20px 20px 20px",
                height: "100vh",
              }}
            >
              <Box
                sx={{
                  color: "#fff",
                  fontSize: "26px",
                  fontWeight: 500,
                }}
              >
                <span style={{ color: "#000" }}>{currentQuestion + 1}</span>
                {"/"} {questions.length}
              </Box>
              <Box
                sx={{
                  color: "#fff",
                  fontSize: "26px",
                  fontWeight: 500,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {questions[currentQuestion].questionText}
              </Box>

              <Box
                sx={{
                  color: "#fff",
                  fontSize: "26px",
                  fontWeight: 500,
                  display: "flex",
                  justifyContent: "center",
                  padding: 5,
                }}
              >
                {questions[currentQuestion].answerOptions.map(
                  (answerOptions) => (
                    <Button
                      variant="contained"
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "5px",
                      }}
                      onClick={() =>
                        handleAnswerButtonClick(answerOptions.isCorrect)
                      }
                    >
                      {answerOptions.answerText}
                    </Button>
                  )
                )}
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}

export default QuizPage;
