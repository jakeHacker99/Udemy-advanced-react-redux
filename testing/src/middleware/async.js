import React from "react";

export default ({ dispatch }) =>
  (next) =>
  (action) => {
    //   check action
    // promise ? wait : next action
    //next middleware

    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    action.payload.then((response) => {
      const newAction = { ...action, payload: response };
      dispatch(newAction);
    });
  };
