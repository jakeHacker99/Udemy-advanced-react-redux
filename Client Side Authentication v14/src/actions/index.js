import axios from "axios";
import { browserHistory } from "react-router";
import * as actions from "../actions";

import AUTH_USER from "../actions/types";
const API_URL = "https:localhost:3090";
export const signinUser = ({ email, password }) => {
  (dispatch) => {
    // submit email/passwword to server

    axios
      .post(`${API_URL}/signin`, { email, password })
      .then((res) => {
        dispatch({ type: AUTH_USER });
        browserHistory.push("/feature");
        localStorage.setItem("token", res.data.token);
      })
      .catch();

    // if request is good..
    // update user state to auth
    // save the jwt
    // redirect to /feature
    // else
    // show  err
  };
};
