import React from "react";
import reactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import SignUp from "./components/auth/SignUp";

import Welcome from "./components/Welcome";

reactDom.render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Welcome}></Route>
      <Route path="/signup" exact component={SignUp}></Route>
    </App>
  </BrowserRouter>,
  document.querySelector("#root")
);
