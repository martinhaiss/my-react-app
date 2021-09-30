import Card from "../Card/Card.js";
import styled, { css } from "styled-components";

function Cards({ data, activeHouse }) {
  const filteredData = data.filter((character) => {
    return character.house === activeHouse;
  });

  const shownData = activeHouse === "All" ? data : filteredData;

  return (
    <CardMain>
      {shownData.map((character) => (
        <Card
          characterName={character.name}
          house={character.house}
          imgUrl={character.image}
          born={character.dateOfBirth}
          ancestry={character.ancestry}
          patronus={character.patronus}
          actor={character.actor}
          key={character.name}
        />
      ))}
    </CardMain>
  );
}

const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export default Cards;
