import "./App.css";
import Header from "../header/Header";
import Cards from "../cards/Cards";
import Footer from "../footer/Footer";
import data from "../data.json";
import { useState } from "react";

function App() {
  const [activeHouse, setActiveHouse] = useState("");

  function handleHouseButtonClick(house) {
    setActiveHouse(house);
  }

  return (
    <div className="App">
      <Header className="Header" />
      <Cards data={data} activeHouse={activeHouse} />
      <Footer
        className="Footer"
        activeHouse={activeHouse}
        onHousebuttonClick={handleHouseButtonClick}
      />
    </div>
  );
}

export default App;
