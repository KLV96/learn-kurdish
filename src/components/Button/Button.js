import Styles from "./Button.module.css";

function Button({ children, clickHandler, changeLangBtn }) {
  return (
    <div
      className={`${changeLangBtn ? Styles.changeLangBtnContainer : null}
        ${Styles.buttonContainer}`}
    >
      <button className={Styles.button} onClick={clickHandler}>
        {children}
      </button>
    </div>
  );
}

export default Button;
