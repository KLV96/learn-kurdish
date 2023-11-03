import "./App.css";
import Header from "./components/Header/Header";
import MemoryCard from "./components/MemoryCard/MemoryCard";
import Button from "./components/Button/Button";
import { useState } from "react";
import memoryList from "./vocabs.json";

function App() {
  const [counter, setCounter] = useState(0);
  console.log(memoryList.length);

  function clickHandler() {
    if (counter >= memoryList.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  }

  return (
    <>
      <Header />
      <MemoryCard item={memoryList[counter]} />
      <Button onClick={clickHandler} />
    </>
  );
}

export default App;
