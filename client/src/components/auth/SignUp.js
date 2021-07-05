import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";

import * as actions from "../reducers/actions";

class SignUp extends Component {
  onSubmit = (formProps) => {
    console.log(formProps);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label htmlFor="">Email</label>

          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">password</label>
          <Field name="password" type="password" component="input" />
        </fieldset>
        <div> {this.props.errorMessage} </div>
        <button>Sing up !</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage };
};

export default compose(
  connect(mapStateToProps, actions),

  reduxForm({ form: "signup" })
)(SignUp);
