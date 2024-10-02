import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((res) => {
      setArticles(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="articles-container">
      <h2 className="articles-header">Articles</h2>
      <div className="inner-articles-container">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
