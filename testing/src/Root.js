import React from "react";

const { Provider } = require("react-redux");
const { default: reducers } = require("reducers");

const { createStore } = require("redux");

export default ({ children, initialState = {} }) => {
  return (
    <Provider store={createStore(reducers, initialState)}>{children}</Provider>
  );
};
