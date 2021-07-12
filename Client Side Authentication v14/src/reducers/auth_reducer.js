import { AUTH_USER, NOT_AUTH_USER } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: "", authenticated: true };
    case NOT_AUTH_USER:
      return { ...state, authenticated: false };
  }
  return state;
};
