import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/articles");
  }
  return (
    <div className="hero">
      <h2 className="hero-header">Discover Agora</h2>
      <p className="hero-text">
        The gathering place where insightful articles and engaging content meet curious minds. Dive into knoweldge, join
        a community and discover a space for exploration and growth!
      </p>
      <button className="hero-button" onClick={handleClick}>
        View all articles
      </button>
    </div>
  );
};

export default Hero;
