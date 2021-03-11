import { ActionType } from "../action-types/index";
interface FetchUser {
  type: ActionType.FETCH_USER;
  payload: {};
}
export type Action = FetchUser;
