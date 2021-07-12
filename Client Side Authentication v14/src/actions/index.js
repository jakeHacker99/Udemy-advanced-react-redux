import axios from "axios";
import { browserHistory } from "react-router";
import * as actions from "../actions";

import { AUTH_USER, AUTH_ERROR, NOT_AUTH_USER } from "../actions/types";
const API_URL = "https:localhost:3090";
export const signinUser = ({ email, password }) => {
  (dispatch) => {
    // submit email/passwword to server

    axios
      .post(`${API_URL}/signin`, { email, password })
      .then((res) => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem("token", res.data.token);
        browserHistory.push("/feature");
      })
      .catch(() => {
        dispatch(authError("Invalid logininfo"));
      });

    // if request is good..
    // update user state to auth
    // save the jwt
    // redirect to /feature
    // else
    // show  err
  };
};
export const signupUser = ({ email, password }) => {
  return (dispatch) => {
    axios
      .post(`${API_URL}/signup`, { email, password })
      .then((res) => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem("token", res.data.token);
        browserHistory.push("/feature");
      })

      .catch((res) => dispatch(authError(res.data.error)));
  };
};

export const authError = (err) => {
  return {
    type: AUTH_ERROR,
    payload: err,
  };
};

export const signoutUser = () => {
  localStorage.removeItem("token");

  return {
    type: NOT_AUTH_USER,
  };
};
