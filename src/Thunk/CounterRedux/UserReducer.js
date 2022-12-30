const initialState = { data1: [], error: "", isLoading: false };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "Started":
      return { ...state, isLoading: true };

    case "USER_SUCCESS":
      return { ...state, isLoading: false, data1: payload };

    case "USER_FAILED":
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
