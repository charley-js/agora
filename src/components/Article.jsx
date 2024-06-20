import { useParams, useNavigate } from "react-router-dom";
import { getArticleById, voteArticle } from "../utils/api";
import { useState, useEffect } from "react";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorCode, setErrorCode] = useState(0);
  const date = new Date(article.created_at).toLocaleDateString();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((res) => {
        setArticle(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMsg(err.response.data.msg);
        setErrorCode(err.response.status);
      });
  }, [article_id]);

  function handleClick() {
    navigate(`/articles/${article_id}/comments`);
  }

  function handleVote() {
    voteArticle(article_id).then((res) => {
      setArticle(res);
    });
  }

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
      <ul className="article-card">
        <p>Topic: {article.topic}</p>
        <p>{date}</p>
        <h3>{article.title}</h3>
        <p>Created by {article.author}</p>
        <img src={article.article_img_url} alt={article.title}></img>
        <p>{article.body}</p>
        <p>
          Votes ({article.votes}) <button onClick={handleVote}>+</button>
        </p>
        <button onClick={handleClick}>View Comments</button>
      </ul>
    </div>
  );
};

export default Article;
