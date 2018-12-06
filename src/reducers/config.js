const config = (state = [], action) => {
  switch (action.type) {
    case "SET_SPEED":
      return state;
    case "SET_SIZE":
      return state;
    case "SET_THEME":
      return state;
    default:
      return state;
  }
};

export default config;
