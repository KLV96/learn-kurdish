import Header from "../components/Header/Header";
import Style from "./Leaderboard.module.css";

function LeaderBoardPage() {
  const chosenDialect = window.location.pathname.split("/")[2];
  console.log(chosenDialect);
  return (
    <>
      <Header chosenDialect={chosenDialect} />

      <div className={Style.outerContainer}>
        <div className={Style.middleContainer}>
          <div className={Style.innerContainer}>
            <h1>COMING SOON!</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeaderBoardPage;
