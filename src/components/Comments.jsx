import { useParams } from "react-router-dom";
import { getComments, getArticleById } from "../utils/api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then((res) => {
        setComments(res);
        return getArticleById(article_id);
      })
      .then((res) => {
        setArticle(res);
        setIsLoading(false);
      });
  }, [article_id]);

  const date = new Date(article.created_at).toLocaleDateString();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul className="article-card">
        <p>Topic: {article.topic}</p>
        <p>{date}</p>
        <h3>{article.title}</h3>
        <p>Created by {article.author}</p>
      </ul>
      {comments.length === 0 ? (
        <p>No Comments</p>
      ) : (
        comments.map((comment) => <CommentCard key={comment.comment_id} comment={comment} />)
      )}
    </div>
  );
};

export default Comments;
