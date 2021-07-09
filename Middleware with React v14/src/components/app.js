import React, { Component } from "react";
import UserList from "./UserList";

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>React simple starter</h2>
        <UserList />
      </div>
    );
  }
}
