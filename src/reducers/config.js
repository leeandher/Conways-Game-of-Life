const config = (state = {}, action) => {
  switch (action.type) {
    case "SET_SPEED":
      let speed;
      switch (action.speed) {
        case "fast":
          speed = 100;
          break;
        case "moderate":
        default:
          speed = 300;
          break;
        case "slow":
          speed = 750;
          break;
      }
      return {
        ...state,
        speed
      };
    case "SET_SIZE":
      let height, width;
      switch (action.size) {
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
        ...state,
        height,
        width
      };
    case "SET_THEME":
      return {
        ...state,
        theme: action.theme
      };
    default:
      return state;
  }
};

export default config;
