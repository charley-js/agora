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

  const style = {
    color: "#f50057",
  };

  const pStyle = {
    "text-align": "center",
  };

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
    <div className="article-view">
      <ul className="article-card2">
        <p className="topic-text2">#{article.topic}</p>
        <h3 className="article-title">{article.title}</h3>
        <p className="author-date-text">
          Created by {article.author} • {date}
        </p>
        <img src={article.article_img_url} alt={article.title}></img>
        <p style={pStyle}>{article.body}</p>
        <p>
          <span>
            Votes ({article.votes}){" "}
            <button className="votes-button" onClick={handleVote}>
              +
            </button>
          </span>
        </p>
        <button onClick={handleClick}>View Comments</button>
      </ul>
    </div>
  );
};

export default Article;
