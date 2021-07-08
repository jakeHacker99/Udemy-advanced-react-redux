import React, { Component } from "react";
import { Link } from "react-router";

class Header extends Component {
  authbutton() {
    return <button>Sign in</button>;
  }
  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li nav-item>
            <Link to="/">Home</Link>
          </li>
          <li nav-item>
            <Link to="/resources">Resources</Link>
          </li>
          <li nav-item>{this.authbutton}</li>
        </ul>
      </nav>
    );
  }
}
export default Header;
