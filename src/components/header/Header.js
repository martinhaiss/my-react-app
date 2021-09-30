import logo from "../img/harry-header.png";
import styled, { css } from "styled-components";

function Header() {
  return (
    <HeaderBox>
      <div>
        <a href="">
          <Img src={logo} alt="Harry Potter Logo" />
        </a>
      </div>
    </HeaderBox>
  );
}

const HeaderBox = styled.header`
  background-color: black;
  margin-top: 10px;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 300px;
  height: auto;
`;

export default Header;
