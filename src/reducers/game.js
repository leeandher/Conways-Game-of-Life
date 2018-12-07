const game = (state = {}, action) => {
  switch (action.type) {
    case "PLAY_GAME":
      return {
        isPlaying: true,
        generation: state.generation
      };
    case "PAUSE_GAME":
      return {
        isPlaying: false,
        generation: state.generation
      };
    case "INCREMENT_BOARD":
      return {
        isPlaying: state.isPlaying,
        generation: state.generation + 1
      };
    default:
      return state;
  }
};

export default game;
