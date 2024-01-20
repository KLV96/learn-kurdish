import Header from "../components/Header/Header";
import Style from "./Quiz.module.css";
import memoryList from "../vocabs.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizButton from "../components/QuizButton/QuizButton";

let quizQuestions,
  answersScore,
  quizOptions,
  choices = null;

function QuizPage() {
  const [index, setIndex] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState(0);
  const navigate = useNavigate();
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    quizQuestions = memoryList.sort(() => 0.5 - Math.random()).slice(0, 10);
    answersScore = 0;

    quizOptions = memoryList
      .sort(() => 0.5 - Math.random())
      .slice(0, 100)
      .map((question) => question.english);

    function getRandomVocab(englishVocab) {
      let vocab = englishVocab;
      while (vocab === englishVocab) {
        vocab = quizOptions[Math.floor(Math.random() * quizOptions.length)];
      }
      return vocab;
    }

    const populateChoices = (englishTrans) => {
      return [
        englishTrans,
        getRandomVocab(englishTrans),
        getRandomVocab(englishTrans),
        getRandomVocab(englishTrans),
      ];
    };

    quizQuestions = quizQuestions.map((quiz) => ({
      ...quiz,
      choices: populateChoices(quiz.english),
    }));

    choices = quizQuestions.map((question) =>
      question.choices.sort(() => 0.5 - Math.random())
    );
    setContentLoaded(true);
  }, []);

  const nextQuestion = () => {
    index < quizQuestions.length - 1
      ? setIndex((previousIndexVal) => previousIndexVal + 1)
      : navigate("/quizResult", {
          state: { answersScore, numOfQuestions: quizQuestions.length },
        });
    setChosenAnswer(0);
  };

  const choiceHandler = (choisenAnsIndex) => {
    setChosenAnswer(choisenAnsIndex);
    quizQuestions[index] = {
      ...quizQuestions[index],
      userAnswer: choisenAnsIndex,
    };

    if (choices[index][choisenAnsIndex - 1] !== quizQuestions[index].english) {
      setTimeout(nextQuestion, 3000);
    } else {
      ++answersScore;
      setTimeout(nextQuestion, 500);
    }
  };

  return (
    <>
      {contentLoaded ? (
        <div>
          <Header
            questionIndex={index + 1}
            totalQuestions={quizQuestions.length}
          />
          <div className={Style.quizContainer}>
            <h1 className={Style.question}>
              What does{" "}
              <span className={Style.vocab}>
                {quizQuestions[index].kurmanji}{" "}
              </span>
              mean?
            </h1>
            <div className={Style.buttonContainer}>
              {[...Array(4)].map((e, i) => (
                <QuizButton
                  key={i}
                  isOptionSelected={chosenAnswer === i + 1}
                  isOptionSelectedWrong={
                    chosenAnswer !== i + 1 &&
                    chosenAnswer !== 0 &&
                    quizQuestions[index].english === choices[index][i]
                  }
                  choiceContent={choices[index][i]}
                  isContentTheRightAnswer={
                    quizQuestions[index].english === choices[index][i]
                  }
                  shouldDisable={chosenAnswer && chosenAnswer !== i + 1}
                  buttonIndex={i + 1}
                  choiceHandler={choiceHandler}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Content not loaded yet</p>
      )}
    </>
  );
}

export default QuizPage;
