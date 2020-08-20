import { ISSUES } from "../Constants";

const initialState = {
  loading: false,
  issues: [],
  error: null,
};

const IssuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ISSUES.LOAD:
      return {
        ...state,
        loading: true,
      };
    case ISSUES.RESPONSE:
      return {
        ...state,
        loading: false,
        issues: action.payload,
      };
    case ISSUES.ERROR:
      return {
        ...state,
        loading: false,
        issues: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default IssuesReducer;
