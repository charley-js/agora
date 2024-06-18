import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const FeaturedArticles = () => {
  const [featuredArticles, setFeaturedArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      res.sort((a, b) => b.created_at - a.created_at);
      setFeaturedArticles(res.slice(0, 5));
    });
  }, []);

  return (
    <>
      {featuredArticles.map((article) => (
        <ArticleCard article={article} />
      ))}
    </>
  );
};

export default FeaturedArticles;
