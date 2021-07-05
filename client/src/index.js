import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore } from "redux";
import App from "./components/App";
import SignUp from "./components/auth/SignUp";
import reducers from "./components/reducers";

import Welcome from "./components/Welcome";

reactDom.render(
  <Provider store={createStore(reducers, {})}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
