import Navbar from "./Navbar";
import logo from "../images/img3.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Pink Robot Logo" />
      <Navbar />
    </header>
  );
};

export default Header;