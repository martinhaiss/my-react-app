import imgURL from "../img/cedric.png";
import "../cards/Cards";

let characterName = "Cedric Diggory";
let house = "Hufflepuff";

function CardCedric() {
  return (
    <section className="Section--CardCedric">
      <img src={imgURL} className="Card--img" alt="Cedric" />
      <div className="Card--Person-Info">
        <h2>{characterName}</h2>
        <p>{house}</p>
        <button className="Button-more">more</button>
      </div>
    </section>
  );
}

export default CardCedric;
