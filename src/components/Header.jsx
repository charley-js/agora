import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1 className="header-title">Agora</h1>
        <button className="login-button">Login</button>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
