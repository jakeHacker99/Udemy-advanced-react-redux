import { expect } from "../test_helper";
import commentReducer from "../../src/components";
import { SAVE_COMMENT } from "../../src/actions/types";

describe("comments reducer", () => {
  it("handles actions with unkown type", () => {
    expect(commentReducer(undefined, {})).to.eql([]);
  });
  it("handles action of type SAVE_COMMENT", () => {
    const action = { type: SAVE_COMMENT, payload: "new comment" };
    expect(commentReducer([], action)).to.eql(["new comment"]);
  });
});
