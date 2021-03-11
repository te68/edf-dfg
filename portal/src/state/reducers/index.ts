import { combineReducers } from "redux";
import repoReducers from "./repoReducer";

const reducers = combineReducers({
  repos: repoReducers,
});

export default reducers;
//return the reducer type so it can be used in the component to give the state an idea of what type it is
export type RootState = ReturnType<typeof reducers>;
