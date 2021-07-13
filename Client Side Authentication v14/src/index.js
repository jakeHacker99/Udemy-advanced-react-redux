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
import Signout from "./components/auth/signout";
import Signup from "./components/auth/signup";
import feature from "./components/feature";
import requireAuth from "./components/auth/require_auth";
import welcome from "./components/welcome";
import { AUTH_USER } from "./actions/types";

const newHistory = createBrowserHistory();

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem("token");

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={newHistory}>
      <Route path="/" component={App}></Route>
      <Route path="/" exact={true} component={welcome}></Route>

      <Route path="/signin" component={Signin} />
      <Route path="/signout" component={Signout} />
      <Route path="/signup" component={Signup} />
      <Route path="/feature" component={requireAuth(feature)} />
    </Router>
  </Provider>,
  document.querySelector(".container")
);
