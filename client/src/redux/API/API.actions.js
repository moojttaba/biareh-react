import APIActionTypes from "./API.types";
import axios from "axios";

const ROOT_URL = "https://jsonplaceholder.typicode.com/posts";
//const API_KEY = "?key=PAPERCLIP1234";

export const fetchPosts = () => {
  // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: APIActionTypes.FETCH_POSTS,
    payload: request,
  };
};
