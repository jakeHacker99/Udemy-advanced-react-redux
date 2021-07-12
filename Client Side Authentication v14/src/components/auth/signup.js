import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import * as actions from "../../actions";

class Signup extends Component {
  render() {
    const {
      handleSubmit,
      fields: { email, password, passwordConfirm },
    } = this.props;

    return (
      <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email} />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" {...password} type="password" />
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input
            className="form-control"
            {...passwordConfirm}
            type="password"
          />
        </fieldset>
        <button action="submit" className="btn btn-primary">
          Sign Up!
        </button>
      </form>
    );
  }
}

const validate = (formProps) => {
  const errors = {};

  if (!formProps.email) {
    errors.email = "please enter an email";
  }

  if (!formProps.password) {
    errors.password = "please enter a password";
  }
  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = "enter password again to confirms";
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = "password just match";
  }
  return errors;
};

export default reduxForm({
  form: "signup",
  fields: ["email", "password", "passwordConfirm"],
  validate,
})(Signup);
