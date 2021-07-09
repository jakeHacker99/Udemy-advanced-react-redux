export default function ({ dispatch }) {
  return (next) => (action) => {
    if (!action.payload || !action.payload.then) {
      next(action);
    }

    action.payload.then((res) => {
      const newAction = { ...action, payload: res };
      dispatch(newAction);
    });
  };
}
