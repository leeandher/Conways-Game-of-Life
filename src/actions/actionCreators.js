/* BOARD ACTIONS */

// Randomize board
export const randomizeBoard = (height, width) => {
  return {
    type: "RANDOMIZE_BOARD",
    height,
    width
  };
};

// Increment the board by one step
export const incrementBoard = boardData => {
  return {
    type: "INCREMENT_BOARD",
    boardData
  };
};

// Clear the board
export const clearBoard = () => {
  return {
    type: "CLEAR_BOARD"
  };
};

// Load a preset board
export const loadPreset = preset => {
  return {
    type: "LOAD_PRESET",
    preset
  };
};

/* GAME ACTIONS */

// Play the game
export const playGame = speed => {
  return {
    type: "PLAY_GAME",
    speed
  };
};

// Pause the game
export const pauseGame = () => {
  return {
    type: "PAUSE_GAME"
  };
};

/* CONFIG ACTIONS */

export const setSpeed = speed => {
  return {
    type: "SET_SPEED",
    speed
  };
};

// Resize the board
export const setSize = (height, width) => {
  return {
    type: "SET_SIZE",
    height,
    width
  };
};

// Change the theme of the board
export const setTheme = theme => {
  return {
    type: "SET_THEME",
    theme
  };
};
