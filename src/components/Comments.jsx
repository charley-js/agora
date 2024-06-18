import { useParams } from "react-router-dom";
import { getComments, getArticleById } from "../utils/api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getComments(article_id)
      .then((res) => {
        setComments(res);
        return getArticleById(article_id);
      })

      .then((res) => {
        setArticle(res);
      });
  }, [article_id]);

  const date = new Date(article.created_at).toLocaleDateString();

  return (
    <div>
      <ul className="article-card">
        <p>{article.topic}</p>
        <p>{date}</p>
        <h3>{article.title}</h3>
        <p>{article.author}</p>
      </ul>
      {comments.map((comment) => (
        <CommentCard comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
