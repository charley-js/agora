import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import { useState, useEffect } from "react";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const date = new Date(article.created_at).toLocaleDateString();

  useEffect(() => {
    getArticleById(article_id).then((res) => {
      setArticle(res);
    });
  }, [article_id]);

  return (
    <div>
      <ul className="article-card">
        <p>{article.topic}</p>
        <p>{date}</p>
        <h3>{article.title}</h3>
        <p>{article.author}</p>
        <img src={article.article_img_url} alt={article.title}></img>
        <p>{article.body}</p>
        <p>Votes ({article.votes})</p>
        <button>+</button>
        <button>View Comments</button>
      </ul>
    </div>
  );
};

export default Article;
