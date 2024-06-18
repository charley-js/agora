import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const TopicArticles = () => {
  const { topic_slug } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((res) => {
      const topicArticles = res.filter((article) => article.topic === topic_slug);
      setArticles(topicArticles);
      setIsLoading(false);
    });
  }, [topic_slug]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Articles on {topic_slug}</h2>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.article_id} />
      ))}
    </div>
  );
};

export default TopicArticles;
