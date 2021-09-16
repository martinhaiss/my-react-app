import { useState } from "react";
import "./Footer.css";

function Footer({ activeHouse, onHousebuttonClick }) {
  return (
    <footer className="Footer--box">
      <nav className="Footer--nav">
        <button
          className={`${
            activeHouse === "Gryffindor" ? "footer__button--active-gr" : ""
          } Footer--Button-Gr`}
          onClick={() => onHousebuttonClick("Gryffindor")}
        >
          Gr
        </button>
        <button
          className={`${
            activeHouse === "Hufflepuff" ? "footer__button--active-hu" : ""
          } Footer--Button-Hu`}
          onClick={() => onHousebuttonClick("Hufflepuff")}
        >
          Hu
        </button>
        <button
          className={`${
            activeHouse === "Ravenclaw" ? "footer__button--active-ra" : ""
          } Footer--Button-Ra`}
          onClick={() => onHousebuttonClick("Ravenclaw")}
        >
          Ra
        </button>
        <button
          className={`${
            activeHouse === "Slytherin" ? "footer__button--active-sl" : ""
          } Footer--Button-Sl`}
          onClick={() => onHousebuttonClick("Slytherin")}
        >
          Sl
        </button>
      </nav>
    </footer>
  );
}

export default Footer;
