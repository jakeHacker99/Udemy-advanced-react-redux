import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import Signin from "./components/auth/Signin";
import Signout from "./components/auth/Signout";
import SignUp from "./components/auth/SignUp";
import Feature from "./components/Feature";
import reducers from "./components/reducers";
import Welcome from "./components/Welcome";

const store = createStore(reducers, {}, applyMiddleware(thunk));

reactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
        <Route path="/feature" exact component={Feature}></Route>
        <Route path="/signout" exact component={Signout}></Route>
        <Route path="/signin" exact component={Signin}></Route>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
