import { useState } from "react";
import "./Card.css";

function tellColorName(house) {
  let color;
  if (house === "Gryffindor") {
    color = "red";
  } else if (house === "Hufflepuff") {
    color = "yellow";
  } else if (house === "Ravenclaw") {
    color = "blue";
  } else if (house === "Slytherin") {
    color = "green";
  } else {
    color = "grey";
  }
  return color;
}

function Card({
  characterName,
  house,
  imgUrl,
  born,
  ancestry,
  patronus,
  actor,
}) {
  const color = tellColorName(house);

  // ----------------- Emoji-stuff  start -----------------

  const [emoji, setEmoji] = useState("");

  function emojiButtonClick(newEmoji) {
    if (emoji === newEmoji) {
      setEmoji("");
    } else {
      setEmoji(newEmoji);
    }
  }

  // ----------------- Emoji-stuff end -----------------

  const [showDetails, setshowDetails] = useState(false);

  const handleDetailsButtonClick = () => {
    setshowDetails(showDetails ? false : true);
  };

  return (
    <section className={`${color} Card`}>
      <img className="Card--img" src={imgUrl} />
      <div className="Card--Person-Info">
        <nav className="EmojiBar">
          <button
            className="EmojiButton"
            onClick={() => emojiButtonClick("❤️ ")}
          >
            {" "}
            ❤️{" "}
          </button>
          <button
            className="EmojiButton"
            onClick={() => emojiButtonClick("👍 ")}
          >
            {" "}
            👍{" "}
          </button>
          <button
            className="EmojiButton"
            onClick={() => emojiButtonClick("👎 ")}
          >
            {" "}
            👎{" "}
          </button>
          <button
            className="EmojiButton"
            onClick={() => emojiButtonClick("🤡 ")}
          >
            {" "}
            🤡{" "}
          </button>
          <button
            className="EmojiButton"
            onClick={() => emojiButtonClick("🤓")}
          >
            {" "}
            🤓{" "}
          </button>
        </nav>

        <h2>
          {" "}
          {emoji} {characterName}
        </h2>
        <p className={color}>House: {house}</p>
        {showDetails ? (
          <aside>
            <p>Date of birth: {born}</p>
            <p>Ancestry: {ancestry} </p>
            <p>Patronus: {patronus}</p>
            <p>Actor: {actor}</p>
          </aside>
        ) : null}
        <button className="Button-more" onClick={handleDetailsButtonClick}>
          show {showDetails ? "less" : "more"}
        </button>
      </div>
    </section>
  );
}

export default Card;
