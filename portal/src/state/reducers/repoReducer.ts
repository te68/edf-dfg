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
      return { loading: false, error: null, data: action.payload };
    default:
      return state;
  }
};

export default reducer;
