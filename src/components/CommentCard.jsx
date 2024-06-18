const CommentCard = ({ comment }) => {
  console.log(comment);
  const date = new Date(comment.created_at).toLocaleDateString();
  return (
    <div className="comment-card">
      <p>{comment.author}</p>
      <p>{date}</p>
      <p>{comment.body}</p>
      <p>Votes ({comment.votes})</p>
      <button>+</button>
      <button>Delete</button>
    </div>
  );
};
export default CommentCard;