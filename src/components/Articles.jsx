import ArticleCard from "./ArticleCard";
const Articles = ({ articles }) => {
  return (
    <div className="articles-container">
      <h2 className="articles-header">Articles</h2>
      {articles.map((article) => (
        <ArticleCard article={article} />
      ))}
    </div>
  );
};

export default Articles;
