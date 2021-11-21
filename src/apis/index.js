import axios from "axios";

export const API = "http://localhost:4000";

const instaAPI = axios.create({
  baseURL: API,
});

export async function fetchPosts() {
  const { data } = await instaAPI.get("/posts");

  return data;
}

export async function fetchPost(id) {
  const { data } = await instaAPI.get(`/posts/${id}`);
  return data;
}

export async function fetchComments(postCode) {
  const { data } = await instaAPI.get(`/posts/${postCode}/comments`);
  return data;
}
