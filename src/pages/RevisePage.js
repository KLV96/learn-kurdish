import "../App.css";
import Header from "../components/Header/Header";
import MemoryCard from "../components/MemoryCard/MemoryCard";
import Button from "../components/Button/Button";
import { useState } from "react";
import kurmanjMemoryList from "../kurmajiVocabs.json";
import soraniMemoryList from "../soraniVocabs.json";

function RevisePage() {
  const chosenDialect = window.location.pathname.split("/")[2];

  const vocabsList =
    chosenDialect === "kurmanji" ? kurmanjMemoryList : soraniMemoryList;

  const numOfVocabs =
    chosenDialect === "kurmanji"
      ? kurmanjMemoryList.length
      : soraniMemoryList.length;

  const initialIndex = Math.floor(Math.random() * numOfVocabs);

  let vocabsViewed = [initialIndex];
  const [index, setIndex] = useState(initialIndex);
  const [frontEnglish, setFrontEnglish] = useState(false);

  function nextQuestionHandler() {
    if (vocabsViewed.length >= numOfVocabs) {
      vocabsViewed = [];
    }
    let vocabIndex = Math.floor(Math.random() * numOfVocabs);
    while (vocabsViewed.includes(vocabIndex)) {
      vocabIndex = Math.floor(Math.random() * numOfVocabs);
    }

    setIndex(vocabIndex);
    vocabsViewed.push(vocabIndex);
  }

  function changeLanguageHandler() {
    setFrontEnglish(!frontEnglish);
    nextQuestionHandler();
  }

  return (
    <>
      <Header numOfVocabs={numOfVocabs} chosenDialect={chosenDialect} />
      <MemoryCard item={vocabsList[index]} frontEnglish={frontEnglish} />
      <Button clickHandler={nextQuestionHandler}>Next Vocabulary</Button>
      <Button clickHandler={changeLanguageHandler} switchLangBtn={true}>
        Switch language
      </Button>
    </>
  );
}

export default RevisePage;
