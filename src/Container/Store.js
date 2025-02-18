import { createStore } from "redux";
import { _reducer, initialState } from "./reducer";

const store = createStore(
  _reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
