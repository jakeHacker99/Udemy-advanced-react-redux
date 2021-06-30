import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "actions";

class CommentBox extends Component {
  state = { comment: "" };

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // TODO -call an action-creator
    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea
            cols="30"
            rows="10"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <div>
            <button>Submit Comment </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
