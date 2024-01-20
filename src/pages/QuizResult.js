import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import Style from "./QuizResult.module.css";

function QuizResult() {
  const location = useLocation();
  const percentage = Math.round(
    (location.state.answersScore / location.state.numOfQuestions) * 100
  );
  const numOfStars = Math.round(
    (location.state.answersScore / location.state.numOfQuestions) * 5
  );

  console.log(location.state.answersScore);
  console.log(location.state.numOfQuestions);
  console.log(numOfStars);

  return (
    <>
      <div className={Style.pyro}>
        {percentage > 80 && <div className={Style.before}></div>}
        <Header />
        <div className={Style.quizResultContainer}>
          <h1
            className={`${Style.finalScore} ${
              percentage > 60 && Style.animatedFinalScore
            }`}
          >
            {percentage}%
          </h1>
          <div>
            {[...Array(numOfStars)].map((e, i) => (
              <img
                src={process.env.PUBLIC_URL + "/star.png"}
                className={Style.star}
                alt="Star"
                key={i}
              />
            ))}
            {percentage < 50 && (
              <div className={Style.gradeFeedBackContainer}>
                <p>Mamoste would be disappointed 😭</p>
                <p>You need to revise more!</p>
              </div>
            )}
            {percentage >= 90 && (
              <div className={Style.gradeFeedBackContainer}>
                <p>Her Biji! Mamoste would be proud 🥹</p>
              </div>
            )}
          </div>
        </div>
        {percentage > 70 && <div className={Style.after}></div>}
      </div>
    </>
  );
}

export default QuizResult;
