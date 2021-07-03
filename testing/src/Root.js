import React from "react";
import async from "middleware/async";

const { Provider } = require("react-redux");
const { default: reducers } = require("reducers");

const { createStore, applyMiddleware } = require("redux");

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(async));

  return <Provider store={store}>{children}</Provider>;
};
