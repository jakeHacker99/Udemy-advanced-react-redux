import React from "react";
import reduxPromise from "redux-promise";

const { Provider } = require("react-redux");
const { default: reducers } = require("reducers");

const { createStore, applyMiddleware } = require("redux");

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  );

  return <Provider store={store}>{children}</Provider>;
};
