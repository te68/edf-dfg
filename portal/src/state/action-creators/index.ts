import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types/index";
import { Action } from "../actions/index";

export const fetchUser = (email: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.post(
        "https://youth-activism-app-server.herokuapp.com/api/auth",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", data.token);
      console.log(data.token);
      dispatch({
        type: ActionType.FETCH_USER,
        payload: data,
      });
    } catch (err) {
      console.log(err.response, "error");
      //.data.errors[0].msg
      // dispatch({
      //   type: ActionType.ALERT_ERROR,
      //   payload: err.response.data.errors[0].msg,
      // });
    }
  };
};

export const logoutUser = () => {
  return async (dispatch: Dispatch<Action>) => {
    localStorage.removeItem("token");
    dispatch({
      type: ActionType.LOGOUT_USER,
    });
  };
};

export const fetchUserSuccess = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.FETCH_USER_SUCCESS });
  };
};
