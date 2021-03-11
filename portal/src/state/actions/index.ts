import { ActionType } from "../action-types/index";
interface FetchUser {
  type: ActionType.FETCH_USER;
  payload: {};
}
interface LogOut {
  type: ActionType.LOGOUT_USER;
}
interface AlertError {
  type: ActionType.ALERT_ERROR;
  payload: string;
}
export type Action = FetchUser | LogOut | AlertError;
