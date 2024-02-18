import Style from "./StudyOptionsPage.module.css";
import HomeStyle from "../index.css";
import Header from "../components/Header/Header";
import { Link, Outlet } from "react-router-dom";

function StudyOptions() {
  const chosenDialect = window.location.pathname.split("/")[2];
  return (
    <>
      <Header chosenDialect={chosenDialect} />
      <div className={HomeStyle.container}>
        <div className={Style.verticalCenter}>
          <Link to="revise" className={Style.buttonLink}>
            Revise
          </Link>
          <Link to="quiz" className={Style.buttonLink}>
            Quiz
          </Link>
          <Link to="leaderboard" className={Style.buttonLink}>
            Leaderboard
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default StudyOptions;
