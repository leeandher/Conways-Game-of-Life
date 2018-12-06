import { createStore, compose } from "redux";

import rootReducer from "./reducers/_root";

const defaultState = {};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export default store;
