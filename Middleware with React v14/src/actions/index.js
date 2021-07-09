import { bindActionCreators } from "redux";
import { FETCH_USERS } from "./types";

export const fetchUsers = () => {
  return {
    type: FETCH_USERS,
    payload: [{ name: "Danne" }, { name: "Jakob" }, { name: "YYazan" }],
  };
};
