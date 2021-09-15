import imgURL from "../img/harry.png";
import "../cards/Cards.css";

let characterName = "Harry Potter";
let house = "Gryffindor";

let cardColor;
if (house === "Gryffindor") {
  cardColor = "red";
} else if (house === "Hufflepuff") {
  cardColor = "yellow";
} else if (house === "Ravenclaw") {
  cardColor = "blue";
} else if (house === "Slytherin") {
  cardColor = "green";
} else {
  cardColor = "white";
}

function CardHarry() {
  return (
    <section className="Section--CardHarry">
      <img src={imgURL} className="Card--img" alt="Harry" />
      <div className="Card--Person-Info">
        <h2>{characterName}</h2>
        <p>{house}</p>
        <button className="Button-more">more</button>
      </div>
    </section>
  );
}

export default CardHarry;

/*
function tellColorName(house) {
  let cardColor;
  if (house === "Gryffindor") {
    cardColor = "red";
  } else if (house === "Hufflepuff") {
    cardColor = "yellow";
  } else if (house === "Ravenclaw") {
    cardColor = "blue";
  } else if (house === "Slytherin") {
    cardColor = "green";
  } else {
    cardColor = "white";
  }
  return color;
}

const color = tellColorName(house);
*/
