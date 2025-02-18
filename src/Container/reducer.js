export const initialState = {
  array: [],
  currentAlgo: "",
  running: false,
};

export const _reducer = (state, action) => {
  switch (action.type) {
    case "array":
      return { ...state, array: action.payload };

    case "currentAlgo":
      return {
        ...state,
        currentAlgo: action.payload,
      };
    case "running":
      return {
        ...state,
        running: action.payload,
      };

    default:
      return state;
  }
};
