import axios from "axios";

const AgoraApi = axios.create({
  baseURL: "https://agora-pudw.onrender.com/api",
});

export const getArticles = () => {
  return AgoraApi.get("/articles").then((res) => {
    return res.data;
  });
};
