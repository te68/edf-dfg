import "bulmaswatch/minty/bulmaswatch.min.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state/index";

import axios from "axios";

import App from "./components/App";

axios.defaults.baseURL = "https://youth-activism-app-server.herokuapp.com";
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
axios.defaults.headers.post["Content-Type"] = "application/json";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
