import React, { Component } from "react";
import { connect } from "react-redux";

export default (ComposedComponent) => {
  class Authentication extends Component {
    static contextType = {
      router: React.PropTypes.object,
    };
    render() {
      console.log(this.props.authenticated);
      return <ComposedComponent {...this.props} />;
    }
  }
  const mapStateToProps = (state) => {
    return { authenticated: state.authenticated };
  };

  return connect(mapStateToProps)(Authentication);
};
