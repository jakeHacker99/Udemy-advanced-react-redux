import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from "enzyme/build";
import Root from "Root";
let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

// console.log(wrapped.find("textarea").length);

it(" has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("the textarea", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "my comment test value" },
    });

    wrapped.update();
  });
  it(" has a textarea that user can type in ", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual(
      "my comment test value"
    );
  });

  it(" cleares textarea on submit", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
