import React, { Component } from "react";
import requireAuth from "./requireAuth";

class Feature extends Component {
  render() {
    return (
      <div>
        <h2>this is the feature </h2>
      </div>
    );
  }
}

export default requireAuth(Feature);
