/* BOARD ACTIONS */

// Randomize board
export const randomizeBoard = (height, width) => {
  const newBoard = [];
  for (let i = 0; i < height; i++) {
    const rowData = [];
    for (let j = 0; j < width; j++) {
      rowData.push(Math.round(Math.random()));
    }
    newBoard.push(rowData);
  }

  return {
    type: "RANDOMIZE_BOARD",
    newBoard
  };
};

// Increment the board by one step
export const incrementBoard = height => {
  return {
    type: "INCREMENT_BOARD",
    height
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

export const spawnCell = (row, col) => {
  console.log(`row ${row}, col ${col}`);
  return {
    type: "SPAWN_CELL",
    row,
    col
  };
};

/* GAME ACTIONS */

// Play the game
export const playGame = () => {
  return {
    type: "PLAY_GAME"
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
export const setSize = size => {
  return {
    type: "SET_SIZE",
    size
  };
};

// Change the theme of the board
export const setTheme = theme => {
  return {
    type: "SET_THEME",
    theme
  };
};
