import Nav from "./Nav";
import Logo from "../../public/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <h1 className="header-title">Agora</h1>
        </div>
        <Nav />
        <div className="login-container">
          <button className="login-button">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
