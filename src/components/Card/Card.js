import "./Card.css";
import { useState } from "react";
import FavYes from "../img/fav-yes.png";
import Fav from "../img/fav.png";
import styled, { css } from "styled-components";

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
      <CardImg src={imgUrl} />
      <div className="Card--Person-Info">
        <EmojiBar>
          <EmojiButton onClick={() => emojiButtonClick("👍 ")}>
            {" "}
            👍{" "}
          </EmojiButton>
          <EmojiButton onClick={() => emojiButtonClick("👎 ")}>
            {" "}
            👎{" "}
          </EmojiButton>
          <EmojiButton
            className="EmojiButton"
            onClick={() => emojiButtonClick("🤡 ")}
          >
            {" "}
            🤡{" "}
          </EmojiButton>
          <EmojiButton
            className="EmojiButton"
            onClick={() => emojiButtonClick("🤓")}
          >
            {" "}
            🤓{" "}
          </EmojiButton>
          <button className="FavoriteButton">
            <img className="FavImg" src={Fav} alt="Favorite Botton" />
          </button>
        </EmojiBar>

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
        <ButtonMore onClick={handleDetailsButtonClick}>
          show {showDetails ? "less" : "more"}
        </ButtonMore>
      </div>
    </section>
  );
}

const EmojiButton = styled.button`
  margin-left: 5px;
  background-color: black;
  border-radius: 10px 10px 10px 10px;
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
`;

const EmojiBar = styled.nav`
  margin-top: 10px;
`;

const ButtonMore = styled.button`
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 10px 10px 10px 10px;
`;

const CardImg = styled.img`
  border-radius: 50%;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export default Card;
