import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>Users</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
