import App from "components/App";
import { mount } from "enzyme/build";
import moxios from "moxios";
import React from "react";
import Root from "Root";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "kaptenen" }, { name: "jake" }, { name: "124" }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

describe("IT Fetch Test", () => {
  it("can fetch comments and display them", (done) => {
    const wrapped = mount(
      <Root>
        <App />
      </Root>
    );

    wrapped.find(".fetch-comments").simulate("click");

    // micro pause
    setTimeout(() => {
      wrapped.update();
      expect(wrapped.find("li").length).toEqual(3);
      done();
      wrapped.unmount();
    }, 100);
  });
});
