import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/"> Redux Auth</Link>
        <>
          {this.props.authenticated ? (
            <div>
              <Link to="/signout"> Sign Out</Link>
              <Link to="/feature"> Feature</Link>
            </div>
          ) : (
            <div>
              <Link to="/signup"> Sign Up</Link>
              <Link to="/signin"> Sign In</Link>
            </div>
          )}
        </>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return { authenticated: state.auth.authenticated };
};
export default connect(mapStateToProps)(Header);
