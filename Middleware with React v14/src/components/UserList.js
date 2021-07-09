import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }
  renderUser(user) {
    return (
      <div className="card card-block">
        <h4 className="card-tittle"> {user.name} </h4>
        <p className="card-text">Chesse Factory</p>
        <a className="btn btn-primary">Email</a>
      </div>
    );
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Users List</h2>

        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return { users: state.users };
};
export default connect(mapStateToProps, actions)(UserList);
