import React from "react";
import { mount } from "enzyme/build";
import Root from "Root";
import CommentList from "components/CommentList";

let wrapped;
beforeEach(() => {
  const initialState = {
    comments: ["Comment1", "Comment2"],
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it(" creats one li per comment", () => {
  console.log(wrapped.find("li").length);
});
