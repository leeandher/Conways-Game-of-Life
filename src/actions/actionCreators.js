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
export const incrementBoard = () => {
  return {
    type: "INCREMENT_BOARD"
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
  let height, width;
  switch (size) {
    case "large":
      height = 50;
      width = 60;
      break;
    default:
    case "medium":
      height = 40;
      width = 50;
      break;
    case "small":
      height = 25;
      width = 30;
      break;
  }
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
