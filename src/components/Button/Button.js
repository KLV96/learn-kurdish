import Styles from "./Button.module.css";

function Button(props) {
  return (
    <div className={Styles.buttonContainer}>
      <button className={Styles.button19} {...props}>
        Next Vocabulary
      </button>
    </div>
  );
}

export default Button;
