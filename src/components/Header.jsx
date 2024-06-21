import Nav from "./Nav";
import Logo from "../../public/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
          <h1 className="header-title">Agora</h1>
        </div>
        <div className="login-container">
          <button className="login-button">Login</button>
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
