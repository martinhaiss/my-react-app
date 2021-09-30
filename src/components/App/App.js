import "./App.css";
import Header from "../header/Header";
import Cards from "../cards/Cards";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

function App() {
  const [activeHouse, setActiveHouse] = useState("All");

  function handleHouseButtonClick(house) {
    setActiveHouse(house);
  }

  // ------------ fetch api ---------------------

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((response) => response.json())
      .then((dataFromServer) => {
        console.log(dataFromServer);
        setData(dataFromServer);
      });

    return () => {
      console.log("cleanup triggered");
    };
  }, []);

  // __________________________________

  return (
    <AppLayout>
      <Header className="Header" />
      <Cards data={data} activeHouse={activeHouse} />
      <Footer
        activeHouse={activeHouse}
        onHousebuttonClick={handleHouseButtonClick}
      />
    </AppLayout>
  );
}

const AppLayout = styled.div`
  max-width: 500px;
  margin: auto;
  height: 98vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.125fr 1fr 0.075fr;
  grid-column-gap: 0px;
  grid-row-gap: 5px;
`;

const HeaderLayout = styled.header`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

export default App;
