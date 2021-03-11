import Login from "./Login";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Landing = () => {
  const { logoutUser } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.auth);
  console.log(data);
  const onClick = () => {
    logoutUser();
  };

  if (localStorage.getItem("token")) {
    return (
      <div>
        <h1>Logged in</h1>
        <button onClick={onClick}>Logout</button>
      </div>
    );
  } else {
    return <Login />;
  }
};

export default Landing;
