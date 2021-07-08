import { renderComponent, expect } from "../test_helper";
import CommentList from "../../src/components/comment_list";

describe("CommentList", () => {
  let component;
  beforeEach(() => {
    const props = {
      comments: ["shu bre", "det är jakob ", "som skriver"],
    };
    component = renderComponent(CommentList, null, props);
  });

  it("shows a Li for each comment", () => {
    expect(component.find("li").length).to.equal(3);
  });

  it("shows each comment that is provided", () => {
    expect(component).to.contain("shu bre");
    expect(component).to.contain("det är jakob");
    expect(component).to.contain("som skriver");
  });
});
