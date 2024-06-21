import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/articles");
  }
  return (
    <div className="hero">
      <h2 className="hero-header">Welcome to Agora</h2>
      <p className="hero-text">
        The gathering place for isnightful articles and engaging content. Discover knoweldge, join a community and
        simply explore!
      </p>
      <button className="hero-button" onClick={handleClick}>
        View all articles
      </button>
    </div>
  );
};

export default Hero;
