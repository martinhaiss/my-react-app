import "./Cards.css";
// import CardHermione from "../CardHermione/CardHermione";
// import CardCedric from "../CardCedric/CardCedric";
// import CardDraco from "../CardDraco/CardDraco";
// import CardHarry from "../CardHarry/CardHarry";
// import CardRon from "../CardRon/CardRon";
// import harryPicture from "../img/harry.png";
// import dracoPicture from "../img/draco.png";
// import hermionePicture from "../img/hermione.png";
// ((import cedricPicture from "../img/cedric.png";
// import ronPicture from "../img/ron.png";

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
          key={character.name}
        />
      ))}
    </div>
  );
}

export default Cards;

/* ------ former "cards.js" before import via "data.json" --------


function Cards() {
  return (
    <div className="Card--box">
      <Card
        characterName="Harry Potter"
        house="Gryffindor"
        imgUrl={harryPicture}
      />
      <Card
        characterName="Draco Malfoy"
        house="Slytherin"
        imgUrl={dracoPicture}
      />
      <Card
        characterName="Hermione Granger"
        house="Gryffindor"
        imgUrl={hermionePicture}
      />
      <Card
        characterName="Cedric Diggory"
        house="Hufflepuff"
        imgUrl={cedricPicture}
      />
      <Card
        characterName="Ron Weasley"
        house="Gryffindor"
        imgUrl={ronPicture}
      />
    </div>
  );
}

export default Cards; */
