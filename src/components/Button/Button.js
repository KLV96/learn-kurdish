import Styles from "./Button.module.css";

function Button({ children, clickHandler, switchLangBtn }) {
  return (
    <div
      className={`${switchLangBtn ? Styles.switchLangBtnContainer : null}
        ${Styles.buttonContainer}`}
    >
      <button className={Styles.button} onClick={clickHandler}>
        {children}
      </button>
    </div>
  );
}

export default Button;
