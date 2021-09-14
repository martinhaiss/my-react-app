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

function Card({ characterName, house, imgUrl }) {
  const color = tellColorName(house);

  return (
    <section className={`${color} Card`}>
      <img className="Card--img" src={imgUrl} />
      <div className="Card--Person-Info">
        <h2>{characterName}</h2>
        <p className={color}>House: {house}</p>
        <button className="Button-more">more</button>
      </div>
    </section>
  );
}

export default Card;
