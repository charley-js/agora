const ArticleCard = ({ article }) => {
  const date = new Date(article.created_at).toLocaleDateString();
  return (
    <>
      <ul className="article-card">
        <p>{article.topic}</p>
        <p>{date}</p>
        <h3>{article.title}</h3>
        <p>{article.author}</p>
        <img src={article.article_img_url}></img>
        <p>Votes ({article.votes})</p>
        <p>Comments ({article.comment_count})</p>
        <button>Read</button>
      </ul>
    </>
  );
};

export default ArticleCard;
