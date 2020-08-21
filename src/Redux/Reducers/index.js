import { combineReducers } from "redux";
import IssuesReducer from "./issuesReducer";
import IncrementReducer from "./incrementReducer";

const rootReducer = combineReducers({
  issues: IssuesReducer,
  increment: IncrementReducer,
});

export default rootReducer;
