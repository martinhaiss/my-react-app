import "./Cards.css";
import "./Cards.css";
import data from "../data.json";
import Card from "../Card/Card.js";
import { useState } from "react";

function Cards({ data, activeHouse }) {
  const filteredData = data.filter((character) => {
    return character.house === activeHouse;
  });

  const shownData = activeHouse === "All" ? data : filteredData;

  return (
    <div className="Card--box">
      {shownData.map((character) => (
        <Card
          characterName={character.name}
          house={character.house}
          imgUrl={character.image}
          born={character.dateOfBirth}
          ancestry={character.ancestry}
          patronus={character.patronus}
          actor={character.actor}
          key={character.name}
        />
      ))}
    </div>
  );
}

export default Cards;
