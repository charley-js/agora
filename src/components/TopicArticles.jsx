import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const TopicArticles = () => {
  const { topic_slug } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorCode, setErrorCode] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((res) => {
        const topicArticles = res.filter((article) => article.topic === topic_slug);
        if (topicArticles.length === 0) {
          setErrorMsg("Invalid topic");
          setErrorCode(404);
        }
        setArticles(topicArticles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMsg(err.response.data.msg);
        setErrorCode(err.response.status);
      });
  }, [topic_slug]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorMsg || errorCode) {
    return (
      <p>
        {errorCode} : {errorMsg}
      </p>
    );
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
