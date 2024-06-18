import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const FeaturedArticles = () => {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((res) => {
      res.sort((a, b) => b.created_at - a.created_at);
      setFeaturedArticles(res.slice(0, 5));
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {featuredArticles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </>
  );
};

export default FeaturedArticles;
