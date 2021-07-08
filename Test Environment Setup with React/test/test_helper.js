import jsdom from "jsdom";
import jquery from "jquery";
import TestUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../src/reducers";
// setup env run as broswer in cmd

global.document = jsdom.jsdom(
  "<!doctype html><html><body></body></body></html>"
);
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build renderComponent helper

renderComponent = (ComponentClass, props, state) => {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  return $(ReactDOM.findDOMNode(componentInstance));
};

// build helper for simulate

// set up chai-jquery

export { renderComponent, expect };
