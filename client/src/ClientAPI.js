import axios from 'axios';

const getUserId = () => {
  return JSON.parse(localStorage.getItem('currentUser'))._id;
};

const cookieHeader = () => {
  return {
    headers: { cookie: getUserId() },
  };
};

const ax = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
});

// AUTH
export const logout = () => {
  return ax.post('/logout', {}, cookieHeader());
};

export const login = (data) => {
  return ax.post('/login', data);
};

// POST
export const createPost = (data) => {
  return ax.post('/posts', data, cookieHeader());
};

export const getPostsList = () => {
  return ax.get('/posts');
};

export const getPost = (postId) => {
  return ax.get(`/posts/${postId}`);
};

export const deletePost = (postId) => {
  return ax.delete(`/posts?postId=${postId}`);
};

export const votePost = (postId, data) => {
  return ax.post(`/posts/${postId}/vote`, data, cookieHeader());
};

export const solvePost = (postId, responseId) => {
  return ax.patch(`/posts/${postId}/${responseId}/solve`, {}, cookieHeader());
};

// RESPONSE
export const createResponse = (postId, data) => {
  return ax.post(`/responses/${postId}`, data, cookieHeader());
};

export const voteResponse = (postId, responseId, data) => {
  return ax.post(
    `/responses/${postId}/${responseId}/vote`,
    data,
    cookieHeader(),
  );
};

// WORKSHOP
export const createWorkshop = (data) => {
  return ax.post('/workshops', data, cookieHeader());
};

export const getWorkshop = (workshopId) => {
  return ax.get(`/workshops/${workshopId}`);
};

export const getWorshopsList = () => {
  return ax.get('/workshop');
};
