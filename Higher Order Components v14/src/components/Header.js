import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import * as actions from "../actions";

class Header extends Component {
  authbutton() {
    if(this.props.authenticated{
      return <button onClick={() => {this.props.authenticate(false)}} >Sign out</button>;
    }
    return <button onClick={() => {this.props.authenticate(true)}} >Sign in</button>;

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
const mapStateToProps = (state) => {
  return { authenticated: state.authenticated };
};

export default conect(mapStateToProps, actions)(Header);
