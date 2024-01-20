import Style from "./Home.module.css";
import HomeStyle from "../index.css";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Header />
      <div className={HomeStyle.container}>
        <div className={Style.verticalCenter}>
          <Link to="/revise" className={Style.buttonLink}>
            Revise
          </Link>
          <Link to="/quiz" className={Style.buttonLink}>
            Quiz
          </Link>
          <Link to="/leaderboard" className={Style.buttonLink}>
            Leaderboard
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
