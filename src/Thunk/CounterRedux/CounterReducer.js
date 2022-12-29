const initialState = {};

export default (state = 0, { type, payload }) => {
  switch (type) {
    case "Plus":
      return state + 1

    case "Minus":
      return state - 1

    case "Minustunk":
      return state - payload;
    default:
      return state;
  }
};
