import axios, { AxiosHeaders } from 'axios';
import { isValidPost, isValidUser, Post, User } from '../models';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const headers: AxiosHeaders = new AxiosHeaders({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'X-Requested-With': 'XMLHttpRequest',
});

axios.interceptors.request.use(
  config => {
    config.headers = headers;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export async function getPosts(): Promise<Post[]> {
  const response = await axios.get(`${baseUrl}/posts`);
  const data = response.data;

  if (!Array.isArray(data)) return [];

  //I like this approach better, so we won't throw the whole response for one broken post, instead we take the fine-composed posts.
  // This enhances the user experience, so the user would still continue his usage for the application even if not the whole posts are well composed
  const validPosts = data.filter(p => {
    return isValidPost(p);
  });

  return validPosts;
}

export async function getSpecificPost(postId: number): Promise<Post> {
  const response = await axios.get(`${baseUrl}/posts/${postId}`);
  const data = response.data;

  if (isValidPost(data)) {
    return data;
  }

  throw 'Invalid Post';
}

export async function getSpecificUser(userId: number): Promise<User> {
  const response = await axios.get(`${baseUrl}/users/${userId}`);
  const data = response.data;
  if (isValidUser(data)) {
    return data;
  }

  throw 'Invalid User';
}
