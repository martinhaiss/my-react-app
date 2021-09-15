import "./Cards.css";
import "./Cards.css";
import data from "../data.json";
import Card from "../Card/Card.js";

function Cards() {
  return (
    <div className="Card--box">
      {data.map((character) => (
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
