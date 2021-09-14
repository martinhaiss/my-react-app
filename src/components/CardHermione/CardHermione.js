import imgURL from "../img/hermione.png";
import "../cards/Cards.css";

let characterName = "Hermione Granger";
let house = "Gryffindor";

function CardHermione() {
  return (
    <section className="Section--CardHermione">
      <img src={imgURL} className="Card--img" alt="Hermione" />
      <div className="Card--Person-Info">
        <h2>{characterName}</h2>
        <p>{house}</p>
        <button className="Button-more">more</button>
      </div>
    </section>
  );
}

export default CardHermione;
