import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/app";
import reducers from "./reducers";
import Signin from "./components/auth/signin";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin} />
      </Route>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
