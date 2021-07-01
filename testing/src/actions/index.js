import axios from "axios";
import { CHANGE_AUTH, FETCH_COMMENT, SAVE_COMMENT } from "./types";

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const fetchComments = () => {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");

  return {
    type: FETCH_COMMENT,
    payload: response,
  };
};
export const changeAuth = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  };
};
