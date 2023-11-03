import "./App.css";
import Header from "./components/Header/Header";
import MemoryCard from "./components/MemoryCard/MemoryCard";
import Button from "./components/Button/Button";
import { useState } from "react";
import memoryList from "./vocabs.json";

function App() {
  const [counter, setCounter] = useState(0);
  const [frontEnglish, setFrontEnglish] = useState(false);
  console.log(memoryList.length);

  function nextQuestionHandler() {
    if (counter >= memoryList.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  }

  function changeLanguageHandler() {
    setFrontEnglish(!frontEnglish);
    nextQuestionHandler();
  }

  return (
    <>
      <Header />
      <MemoryCard item={memoryList[counter]} frontEnglish={frontEnglish} />
      <Button clickHandler={nextQuestionHandler}>Next Vocabulary</Button>
      <Button clickHandler={changeLanguageHandler} changeLangBtn={true}>
        Change language
      </Button>
    </>
  );
}

export default App;
