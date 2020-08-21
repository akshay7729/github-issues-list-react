import { INCREMENT } from "../Constants";

const initialState = { watch: 0, star: 0, fork: 0 };

const IncrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT.WATCH:
      return {
        ...state,
        watch: action.payload + 1,
      };
    case INCREMENT.STAR:
      return {
        ...state,
        star: action.payload + 1,
      };
    case INCREMENT.FORK:
      return {
        ...state,
        fork: action.payload + 1,
      };
    default:
      return {
        ...state,
      };
  }
};

export default IncrementReducer;
