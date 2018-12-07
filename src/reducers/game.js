const game = (state = {}, action) => {
  switch (action.type) {
    case "PLAY_GAME":
      return {
        ...state,
        isPlaying: true
      };
    case "PAUSE_GAME":
      return {
        ...state,
        isPlaying: false
      };
    case "INCREMENT_BOARD":
      return {
        ...state,
        generation: state.generation + 1
      };
    default:
      return state;
  }
};

export default game;
