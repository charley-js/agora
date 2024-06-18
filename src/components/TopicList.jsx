import { getTopics } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TopicList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    getTopics().then((res) => {
      setTopics(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {topics.map((topic) => (
        <ul key={topic.slug}>
          <h3>
            <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
          </h3>
          <p>{topic.description}</p>
        </ul>
      ))}
    </>
  );
};

export default TopicList;
