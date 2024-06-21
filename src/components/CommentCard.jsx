import { deleteComment } from "../utils/api";
import { useState } from "react";

const CommentCard = ({ comment, setComments }) => {
  const [isLoading, setIsLoading] = useState(false);
  const date = new Date(comment.created_at).toLocaleDateString();

  const style = {
    color: "#f50057",
  };

  function handleClick() {
    setIsLoading(true);
    deleteComment(comment.comment_id).then(() => {
      setIsLoading(false);
      setComments((comments) => comments.filter((comm) => comm.comment_id !== comment.comment_id));
      alert("Comment deleted");
    });
  }

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="comment-card">
      <p style={style}> Created by {comment.author}</p>
      <p className="date-text">{date}</p>
      <hr></hr>
      <p>{comment.body}</p>
      <div className="votes">
        <p>
          Votes <span style={style}>({comment.votes}) </span> <button className="votes-button">+</button>
        </p>
      </div>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};
export default CommentCard;
