import React from "react";
import { useActions } from "../hooks/useActions";

const NavBar = () => {
  const { logoutUser } = useActions();

  const onClick = () => {
    logoutUser();
    localStorage.removeItem("token");
  };
  return (
    <nav className="navbar navbar-brand">
      <div className="navbar-start">
        <p className="navbar-item">Youth Activism App Dashboard</p>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <button className="button is-info" onClick={onClick}>
                Logout
              </button>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
