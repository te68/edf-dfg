import { combineReducers } from "redux";
import authReducer from "./authReducer";

const reducers = combineReducers({
  auth: authReducer,
});

export default reducers;
//return the reducer type so it can be used in the component to give the state an idea of what type it is
export type RootState = ReturnType<typeof reducers>;
