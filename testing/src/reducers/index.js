import { combineReducers } from "redux";
import commentsReducers from "reducers/comments";
import auth from "./auth";

export default combineReducers({
  comments: commentsReducers,
  auth: auth,
});
