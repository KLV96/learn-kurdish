import Style from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ chosenDialect, numOfVocabs, questionIndex, totalQuestions }) {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, 4000);

  return (
    <>
      <Link to="../">
        <img
          src={process.env.PUBLIC_URL + "/homeIcon.png"}
          className={Style.homeIcon}
          alt="Home icon"
        />
      </Link>
      <h1 className={Style.Header}>Learn {chosenDialect}</h1>
      {numOfVocabs && show && (
        <p className={Style.numOfVocabs}>Covers {numOfVocabs} vocabularies</p>
      )}
      {questionIndex && (
        <h1 className={Style.questionCounter}>
          {questionIndex}/{totalQuestions}
        </h1>
      )}
    </>
  );
}

export default Header;
