import Header from "../components/Header/Header";
import Style from "./Leaderboard.module.css";

function LeaderBoardPage() {
  return (
    <>
      <Header />

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
