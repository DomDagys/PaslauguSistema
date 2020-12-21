import { fetchWrapper, history } from "@/_helpers";
import config from "config";
import { func } from "prop-types";

const baseUrl = `${config.apiUrl}/posts`;

export const postService = {
  getPostsByCategory,
  getPostsBySearch,
  getPostById,
  rememberPost,
  getRelativePosts,
  getPostsByUsername,
  getRememberedPosts,
  getUserPosts,
  addPost,
  editPost,
  deletePost
};

function getPostsByCategory(category) {
  return fetchWrapper.get(`${baseUrl}/category/${category}`);
}

function getPostsBySearch(search, accountId = -1) {
  return fetchWrapper.post(`${baseUrl}/search/${search}`, { accountId });
}

function getPostById(id) {
  return fetchWrapper.get(`${baseUrl}/byId/${id}`);
}

function rememberPost(postId, accountId) {
  return fetchWrapper.post(`${baseUrl}/remember`, { postId, accountId });
}

function getRememberedPosts(accountId) {
  return fetchWrapper.get(`${baseUrl}/rememberedBy/${accountId}`);
}

function getRelativePosts(accountId) {
  return fetchWrapper.get(`${baseUrl}?accountId=${search}&id=accountId`);
}

function getPostsByUsername(username) {
  return fetchWrapper.get(`${baseUrl}/userPosts?username=${username}`);
}

function getUserPosts(accoundId) {
  return fetchWrapper.get(`${baseUrl}/creatorPosts/${accountId}`);
}

function addPost(post) {
  return fetch.post(`${baseUrl}/`, post);
}

function editPost(post) {
  return fetch.put(`${baseUrl}/updatePost/${post.postId}`, post);
}

function deletePost(postId) {
  return fetch.delete(`${baseUrl}/removePost/${postId}`);
}