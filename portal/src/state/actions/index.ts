import { ActionType } from "../action-types/index";
interface FetchUser {
  type: ActionType.FETCH_USER;
  payload: {};
}
interface LogOut {
  type: ActionType.LOGOUT_USER;
}
export type Action = FetchUser | LogOut;
