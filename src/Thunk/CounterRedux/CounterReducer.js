const initialState = {};

export default (state = 0, { type, paylode }) => {  
  switch (type) {
    case "PLUS":
      return state + 1

    case "MINUS":
      return state - 1

    case "Minustunk":
      return state - paylode;
    default:
      return state;
  }
};
