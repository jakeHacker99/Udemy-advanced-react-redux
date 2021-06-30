const { SAVE_COMMENT } = require("actions/types");
const { default: commentsReducer } = require("reducers/comments");

it("handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment",
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(["New Comment"]);
});

it("handles test with unkowntyp", () => {
  const newState = commentsReducer([], { type: "Jake är tung" });
  expect(newState).toEqual([]);
});
