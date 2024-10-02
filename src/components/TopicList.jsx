import { getTopics } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TopicList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [topics, setTopics] = useState([]);

  const style = {
    color: "#f50057",
  };
  useEffect(() => {
    setIsLoading(true);
    getTopics().then((res) => {
      setTopics(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="topic-list">
      {topics.map((topic) => (
        <ul key={topic.slug}>
          <h3>
            <Link style={style} to={`/topics/${topic.slug}`}>
              #{topic.slug}
            </Link>
          </h3>
          <p>{topic.description}</p>
        </ul>
      ))}
    </div>
  );
};

export default TopicList;
