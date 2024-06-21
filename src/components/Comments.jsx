import { useParams } from "react-router-dom";
import { getComments, getArticleById, postComment } from "../utils/api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");

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

  const style = {
    color: "#009688",
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (!username || !newComment) {
      alert("Missing username/comment");
    }
    setIsLoading(true);
    postComment(article_id, { username, body: newComment })
      .then((res) => {
        setComments((comments) => [res, ...comments]);
        setNewComment("");
        setUsername("");
        setIsLoading(false);
        alert("Comment posted succesfully");
      })
      .catch((err) => {
        setIsLoading(false);
        alert("Invalid username");
      });
  }

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="comment-article">
      <div className="article-details">
        <p className="topic-text">{article.topic}</p>
        <p className="date-text">{date}</p>
        <h3 style={style}>{article.title}</h3>
        <p className="author-text">Created by {article.author}</p>
      </div>

      <form className="new-comment" onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="Username..."
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <label htmlFor="comment"></label>
        <input
          type="text"
          id="comment"
          value={newComment}
          placeholder="Write your comment..."
          onChange={(event) => setNewComment(event.target.value)}
          required
        />
        <button type="submit">Post</button>
      </form>

      {comments.length === 0 ? (
        <p>No Comments</p>
      ) : (
        comments.map((comment) => <CommentCard key={comment.comment_id} comment={comment} setComments={setComments} />)
      )}
    </div>
  );
};

export default Comments;
