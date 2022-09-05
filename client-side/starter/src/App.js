import React, { useState, useEffect } from "react";
import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";
export default function App() {
  const [APIData, setAPIData] = useState([]);
  const [rank, setRqnk] = useState();
  const [showScore, setshowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
//get words list from Api
  useEffect(() => {
    axios
      .get(`http://localhost:3010/api/wordsList/wordsList`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);
//handle "progess bar"
  const progress_bar = () => {
    const progress = (currentQuestion + 1) * 10;
    return <ProgressBar completed={progress} />;
  };
//add try again button  
  const handleTryAgin = () => {
    setScore(0);
    setCurrentQuestion(0);
    setshowScore(false);
  };
//handle answers and jump to next quetion
  const handleQuizAnswersClick = async (answer) => {
    if (answer === APIData[currentQuestion].pos) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < APIData.length) {
      setCurrentQuestion(nextQuestion);
    }
    //after last question get the rank 
    else {
      await axios
        .get(`http://localhost:3010/api/rank/rank/${score * 10}`)
        .then((response) => {
          setRqnk(response.data);
        });

      setshowScore(true);
    }
  };
  //show the word
  const handleWord = () => {
    if (APIData.length > 0) {
      return APIData[currentQuestion].word;
    }
  };
  const handleRank = () => {
    if (rank) {
      return rank.rank;
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          your rank {handleRank()} You scored {score} out of {APIData.length}
          <button onClick={handleTryAgin}>tryAgain</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            {progress_bar()}
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{APIData.length}
            </div>
            <div className="question-text">{handleWord()}</div>
          </div>
          <div className="answer-section">
            <button onClick={() => handleQuizAnswersClick("adjective")}>
              adjective
            </button>
            <button onClick={() => handleQuizAnswersClick("verb")}>verb</button>
            <button onClick={() => handleQuizAnswersClick("adverb")}>
              adverb
            </button>
            <button onClick={() => handleQuizAnswersClick("noun")}>noun</button>
          </div>
          
        </>
      )}
    </div>
  );
}
