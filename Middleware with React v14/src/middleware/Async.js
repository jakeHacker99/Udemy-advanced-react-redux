export default function ({ dispatch }) {
  return (next) => (action) => {
    const handleResponse = (res) => {
      const newAction = { ...action, payload: res };
      dispatch(newAction);
    };
    if (!action.payload || !action.payload.then) {
      next(action);
    }

    action.payload.then(handleResponse);
  };
}
