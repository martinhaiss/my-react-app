import imgURL from "../img/draco.png";
import "../cards/Cards.css";

let characterName = "Draco Malfoy";
let house = "Slytherin";

function CardDraco() {
  return (
    <section className="Section--CardDraco">
      <img src={imgURL} className="Card--img" alt="Draco" />
      <div className="Card--Person-Info">
        <h2>{characterName}</h2>
        <p>{house}</p>
        <button className="Button-more">more</button>{" "}
      </div>
    </section>
  );
}

export default CardDraco;
