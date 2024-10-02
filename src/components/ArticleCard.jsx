import { useNavigate } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();
  const date = new Date(article.created_at).toLocaleDateString();

  const style = {
    color: "#f50057",
  };

  function handleClick() {
    navigate(`/articles/${article.article_id}`);
  }
  return (
    <>
      <ul key={article.article_id} className="article-card">
        <p className="topic-text">#{article.topic}</p>
        <h3 className="article-title">{article.title}</h3>
        <p className="author-date-text" style={style}>
          Created by {article.author} • {date}
        </p>
        <img className="article-image" src={article.article_img_url} alt={article.title}></img>
        <div className="article-votes-comments">
          <p>
            Votes <span style={style}>({article.votes}) </span>
          </p>
          <p>
            Comments <span style={style}>({article.comment_count}) </span>
          </p>
        </div>
        <button onClick={handleClick}>Read</button>
      </ul>
    </>
  );
};

export default ArticleCard;
