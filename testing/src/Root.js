import React from "react";

const { Provider } = require("react-redux");
const { default: reducers } = require("reducers");

const { createStore } = require("redux");

export default (props) => {
  return (
    <Provider store={createStore(reducers, {})}>{props.children}</Provider>
  );
};
