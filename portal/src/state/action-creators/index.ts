import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types/index";
import { Action } from "../actions/index";
export const fetchUser = (email: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const {
        data,
      } = await axios.post(
        "https://youth-activism-app-server.herokuapp.com/api/auth",
        { email, password }
      );
      localStorage.setItem("token", data.token);
      console.log(data.token);
      dispatch({
        type: ActionType.FETCH_USER,
        payload: data,
      });
    } catch (err) {
      console.log(err.response.data.errors[0], "error");
    }
  };
};
