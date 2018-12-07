import { createStore, compose } from "redux";

import rootReducer from "./reducers/_root";

const defaultState = {
  config: {
    speed: 300,
    height: 40,
    width: 50,
    theme: "light"
  },
  game: {
    isPlaying: false,
    generation: 0
  }
};

// Generate a random board for the initial state and assign it
const defaultBoard = [];
for (let i = 0; i < defaultState.config.height; i++) {
  const rowData = [];
  for (let j = 0; j < defaultState.config.width; j++) {
    rowData.push(Math.round(Math.random()));
  }
  defaultBoard.push(rowData);
}
defaultState.board = defaultBoard;

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export default store;
