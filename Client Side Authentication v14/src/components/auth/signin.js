import React, { Component } from "react";
import { reduxForm } from "redux-form";

class Signin extends Component {
  render() {
    return (
      <form action="">
        <fieldset className="form-group">
          <label htmlFor="">Email:</label>
          <input type="text">Password: </input>
        </fieldset>
        <button action="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    );
  }
}
export default reduxForm({
  form: "signin",
  fields: ["email", "password"],
})(Signin);
