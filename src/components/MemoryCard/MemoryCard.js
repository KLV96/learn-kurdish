import Style from "./MemoryCard.module.css";

function MemoryCard({ item }) {
  return (
    <>
      <div class={Style.card}>
        <div class={Style.content}>
          <div class={Style.front}>{item.kurmanji}</div>
          <div class={Style.back}>{item.english}</div>
        </div>
      </div>
    </>
  );
}

export default MemoryCard;
