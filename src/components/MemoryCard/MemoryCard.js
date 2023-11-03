import Style from "./MemoryCard.module.css";

function MemoryCard({ item, frontEnglish }) {
  return (
    <>
      <div class={Style.card}>
        <div class={Style.content}>
          {frontEnglish ? (
            <>
              <div class={Style.front}>{item.english}</div>
              <div class={Style.back}>{item.kurmanji}</div>
            </>
          ) : (
            <>
              <div class={Style.front}>{item.kurmanji}</div>
              <div class={Style.back}>{item.english}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default MemoryCard;
