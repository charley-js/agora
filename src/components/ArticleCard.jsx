import { useNavigate } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();
  const date = new Date(article.created_at).toLocaleDateString();

  function handleClick() {
    navigate(`/articles/${article.article_id}`);
  }
  return (
    <>
      <ul key={article.article_id} className="article-card">
        <p>Topic: {article.topic}</p>
        <p>{date}</p>
        <h3>{article.title}</h3>
        <p>Created by {article.author}</p>
        <img src={article.article_img_url} alt={article.title}></img>
        <p>Votes ({article.votes})</p>
        <p>Comments ({article.comment_count})</p>
        <button onClick={handleClick}>Read</button>
      </ul>
    </>
  );
};

export default ArticleCard;
