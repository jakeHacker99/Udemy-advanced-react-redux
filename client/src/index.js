import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import SignUp from "./components/auth/SignUp";
import reducers from "./components/reducers";
import Welcome from "./components/Welcome";

const store = createStore(reducers, {}, applyMiddleware(thunk));

reactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
