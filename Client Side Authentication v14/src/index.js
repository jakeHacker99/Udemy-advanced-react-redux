import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
Router;

import App from "./components/app";
import reducers from "./reducers";
import Signin from "./components/auth/signin";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { createBrowserHistory } from "history";
import reduxThunk from "redux-thunk";

const newHistory = createBrowserHistory();

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={newHistory}>
      <Route path="/" component={App}></Route>
      <Route path="/signin" component={Signin} />
    </Router>
  </Provider>,
  document.querySelector(".container")
);
