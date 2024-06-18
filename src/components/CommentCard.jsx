import { deleteComment } from "../utils/api";
import { useState } from "react";

const CommentCard = ({ comment, setComments }) => {
  const [isLoading, setIsLoading] = useState(false);
  const date = new Date(comment.created_at).toLocaleDateString();

  function handleClick() {
    setIsLoading(true);
    deleteComment(comment.comment_id).then(() => {
      setIsLoading(false);
      setComments((comments) => comments.filter((comm) => comm.comment_id !== comment.comment_id));
      alert("Comment deleted");
    });
  }

  return (
    <div className="comment-card">
      <p>{comment.author}</p>
      <p>{date}</p>
      <p>{comment.body}</p>
      <p>
        Votes ({comment.votes}) <button>+</button>
      </p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};
export default CommentCard;
