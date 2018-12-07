import { createStore, compose } from "redux";

import rootReducer from "./reducers/_root";

const defaultState = {
  board: [1, 2, 3]
};

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export default store;
