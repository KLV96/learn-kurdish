import Style from "./Header.module.css";
import { useState } from "react";

function Header({ numOfVocabs }) {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, 4000);

  return (
    <>
      <h1 className={Style.Header}>Learn Kurmanji</h1>
      {show && (
        <p className={Style.numOfVocabs}>Covers {numOfVocabs} vocabularies</p>
      )}
    </>
  );
}

export default Header;
