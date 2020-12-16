import { fetchWrapper, history } from "@/_helpers";
import config from "config";

const baseUrl = `${config.apiUrl}/posts`;

export const postService = {
  getPostsByCategory,
  getPostsBySearch,
  getPostById,
  rememberPost,
  getRelativePosts,
  getUserPosts
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
  return fetchWrapper.post(`${baseUrl}/rememember`, { postId, accountId });
}

function getRelativePosts(accountId) {
  return fetchWrapper.get(`${baseUrl}?accountId=${search}&id=accountId`);
}

function getUserPosts(username) {
  return fetchWrapper.get(`${baseUrl}/userPosts?username=${username}`);
}