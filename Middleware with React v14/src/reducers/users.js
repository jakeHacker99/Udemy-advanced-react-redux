import React from "react";
import { FETCH_USERS } from "../actions/types";

function users(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload.data];
  }
  return state;
}

export default users;
