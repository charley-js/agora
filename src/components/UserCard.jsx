const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img className="user-image" src={user.avatar_url}></img>
      <p className="user-name">{user.username}</p>
      <p className="user-realname">{user.name}</p>
    </div>
  );
};

export default UserCard;
