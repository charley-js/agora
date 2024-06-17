import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getArticles } from "./utils/api";
import Header from "./components/Header";
import Home from "./components/Home";
import Articles from "./components/Articles";
import "./styles.css";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles articles={articles} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
