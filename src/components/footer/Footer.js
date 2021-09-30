import { useState } from "react";
import "./Footer.css";
import styled, { css } from "styled-components";

function Footer({ activeHouse, onHousebuttonClick }) {
  return (
    <FooterBox>
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
    </FooterBox>
  );
}

const FooterBox = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: black;
  border-radius: 0px 0px 15px 15px;
`;

export default Footer;
