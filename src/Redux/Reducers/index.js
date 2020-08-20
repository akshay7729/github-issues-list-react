import { combineReducers } from "redux";
import IssuesReducer from "./issuesReducer";

const rootReducer = combineReducers({
  issues: IssuesReducer,
});

export default rootReducer;
