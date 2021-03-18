import { ActionType } from "../action-types/index";
import { Action } from "../actions/index";
interface RepoState {
  loading: boolean;
  error: string | null;
  data: {};
}
const initialState = {
  loading: false,
  error: null,
  data: [],
};
const reducer = (
  state: RepoState = initialState,
  action: Action
): RepoState => {
  switch (action.type) {
    case ActionType.FETCH_USER:
      return { loading: true, error: null, data: action.payload };
    case ActionType.LOGOUT_USER:
      return { loading: false, error: null, data: {} };
    case ActionType.ALERT_ERROR:
      return { loading: false, error: action.payload, data: {} };
    case ActionType.FETCH_USER_SUCCESS:
      return { loading: false, error: null, data: {} };
    default:
      return state;
  }
};

export default reducer;
