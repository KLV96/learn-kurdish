import Style from "./MemoryCard.module.css";

function getFontStyle(item) {
  let fontStyle = "";
  if (item.length >= 14) {
    fontStyle = Style.tinyFont;
  } else if (item.length > 9) {
    fontStyle = Style.smallerFont;
  }
  return fontStyle;
}

function MemoryCard({ item, frontEnglish }) {
  return (
    <>
      <div className={Style.card}>
        <div className={Style.content}>
          {frontEnglish ? (
            <>
              <div className={Style.front}>
                <p className={getFontStyle(item.english)}>{item.english}</p>
              </div>
              <div className={Style.back}>
                <p className={getFontStyle(item.kurmanji)}>{item.kurmanji}</p>
              </div>
            </>
          ) : (
            <>
              <div className={Style.front}>
                <p className={getFontStyle(item.kurmanji)}>{item.kurmanji}</p>
              </div>
              <div className={Style.back}>
                <p className={getFontStyle(item.english)}>{item.english}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default MemoryCard;
