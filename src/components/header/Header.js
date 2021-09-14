import "./Header.css";
import logo from "../img/harry-header.png";

function Header() {
  return (
    <header className="Header--box">
      <div className="title-box">
        <img src={logo} className="Header--Logo" alt="Harry Potter Logo" />
      </div>
    </header>
  );
}

export default Header;
