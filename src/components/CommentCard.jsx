const CommentCard = ({ comment }) => {
  const date = new Date(comment.created_at).toLocaleDateString();

  return (
    <div className="comment-card">
      <p>{comment.author}</p>
      <p>{date}</p>
      <p>{comment.body}</p>
      <p>
        Votes ({comment.votes}) <button>+</button>
      </p>
      <button>Delete</button>
    </div>
  );
};
export default CommentCard;
