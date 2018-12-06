const board = (state = [], action) => {
  switch (action.type) {
    case "RANDOMIZE_BOARD":
      return state;
    case "INCREMENT_BOARD":
      return state;
    case "CLEAR_BOARD":
      return state;
    case "LOAD_PRESET":
      return state;
    default:
      return state;
  }
};

export default board;
