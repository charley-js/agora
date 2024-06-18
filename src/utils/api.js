import axios from "axios";

const AgoraApi = axios.create({
  baseURL: "https://agora-pudw.onrender.com/api",
});

export const getArticles = () => {
  return AgoraApi.get("/articles").then((res) => {
    return res.data;
  });
};

export const getArticleById = (article_id) => {
  return AgoraApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

export const getComments = (article_id) => {
  return AgoraApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export const voteArticle = (article_id) => {
  return AgoraApi.patch(`/articles/${article_id}`, { inc_votes: 1 }).then((res) => {
    return res.data;
  });
};

export const postComment = (article_id, comment) => {
  return AgoraApi.post(`/articles/${article_id}/comments`, comment).then((res) => {
    return res.data;
  });
};

export const deleteComment = (comment_id) => {
  return AgoraApi.delete(`/comments/${comment_id}`).then((res) => {
    return res.data;
  });
};

export const getTopics = () => {
  return AgoraApi.get("/topics").then((res) => {
    return res.data;
  });
};
