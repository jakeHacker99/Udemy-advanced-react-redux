import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { mapStateToProps } from "./header";
class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }
  render() {
    return (
      <div>
        this is a feature
        {this.props.message}
      </div>
    );
  }
}

export const mapStatToProps = (state) => {
  return { message: state.auth.message };
};

export default connect(mapStateToProps, actions)(Feature);
