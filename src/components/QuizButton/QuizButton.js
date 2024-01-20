import Style from "./QuizButton.module.css";

function QuizButton({
  isOptionSelected,
  isOptionSelectedWrong,
  shouldDisable,
  choiceContent,
  choiceHandler,
  buttonIndex,
  isContentTheRightAnswer,
}) {
  return (
    <button
      className={` ${Style.choiceBtn} ${isOptionSelected ? Style.chosen : ""} ${
        isOptionSelected && isContentTheRightAnswer
          ? Style.rightAnswer
          : isOptionSelected && Style.wrongAnswer
      } ${isOptionSelectedWrong && Style.rightAnswer}`}
      onClick={() => choiceHandler(buttonIndex)}
      disabled={shouldDisable}
    >
      {choiceContent}
    </button>
  );
}

export default QuizButton;
