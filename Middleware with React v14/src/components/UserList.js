import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }
  renderUser(user) {
    return (
      <div className="card card-block" key={user.id}>
        <h4 className="card-tittle"> {user.name} </h4>
        <p className="card-text"> {user.company.name} </p>
        <a className="btn btn-primary" href={user.website}>
          Website
        </a>
      </div>
    );
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2 className="center-me">Users List</h2>
        <div className="user-list">{this.props.users.map(this.renderUser)}</div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return { users: state.users };
};
export default connect(mapStateToProps, actions)(UserList);
