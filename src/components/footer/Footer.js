import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [activeHouse, setActiveHouse] = useState("");
  return (
    <footer className="Footer--box">
      <nav className="Footer--nav">
        <button
          className={`${
            activeHouse === "Gryffindor" ? "footer__button--active-gr" : ""
          } Footer--Button-Gr`}
          onClick={() => setActiveHouse("Gryffindor")}
        >
          Gr
        </button>
        <button
          className={`${
            activeHouse === "Hufflepuff" ? "footer__button--active-hu" : ""
          } Footer--Button-Hu`}
          onClick={() => setActiveHouse("Hufflepuff")}
        >
          Hu
        </button>
        <button
          className={`${
            activeHouse === "Ravenclaw" ? "footer__button--active-ra" : ""
          } Footer--Button-Ra`}
          onClick={() => setActiveHouse("Ravenclaw")}
        >
          Ra
        </button>
        <button
          className={`${
            activeHouse === "Slytherin" ? "footer__button--active-sl" : ""
          } Footer--Button-Sl`}
          onClick={() => setActiveHouse("Slytherin")}
        >
          Sl
        </button>
      </nav>
    </footer>
  );
}

export default Footer;
