import Style from "./StudyOptionsPage.module.css";
import HomeStyle from "../index.css";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

function DialectSelectionPage() {
  return (
    <>
      <Header chosenDialect="Kurdish" />
      <div className={HomeStyle.container}>
        <div className={Style.verticalCenter}>
          <Link to="kurmanji" className={Style.buttonLink}>
            Kurmanji
          </Link>
          <Link to="sorani" className={Style.buttonLink}>
            Sorani
          </Link>
        </div>
      </div>
    </>
  );
}

export default DialectSelectionPage;
