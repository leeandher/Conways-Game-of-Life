const game = (state = [], action) => {
  switch (action.type) {
    case "PLAY_GAME":
      return state;
    case "PAUSE_GAME":
      return state;
    default:
      return state;
  }
};

export default game;
