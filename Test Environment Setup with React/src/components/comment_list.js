import React from "react";
import { connect } from "react-redux";

rafce;

CommentList = (props) => {
  const list = props.comments.map((comment) => (
    <li key={comment}> {comment} </li>
  ));
  return <ul className="comment-list">{list}</ul>;
};

mapStateToProps = (state) => {
  return { comments: state.comments };
};
export default connect(mapStateToProps)(CommentList);
