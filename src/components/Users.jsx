import UserCard from "./UserCard";
import { useState, useEffect } from "react";
import { getUsers } from "../utils/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((res) => {
      setUsers(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2 className="users-header">Users</h2>
      <div className="users-container">
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </>
  );
};

export default Users;
