import imgURL from "../img/ron.png";
import "../cards/Cards.css";

let characterName = "Ron Weasley";
let house = "Gryffindor";

function CardRon() {
  return (
    <section className="Section--CardRon">
      <img src={imgURL} className="Card--img" alt="Ron" />
      <div className="Card--Person-Info">
        <h2>{characterName}</h2>
        <p>{house}</p>
        <button className="Button-more">more</button>
      </div>
    </section>
  );
}

export default CardRon;
