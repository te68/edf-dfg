import Login from "./Login";
import { useActions } from "../hooks/useActions";
import NavBar from "./NavBar";
import EventsTable from "./EventsTable";
const Landing = () => {
  const { logoutUser } = useActions();
  const onClick = () => {
    logoutUser();
  };

  if (localStorage.getItem("token")) {
    return (
      <div>
        <NavBar />
        <EventsTable />
        <h1>Logged in</h1>
      </div>
    );
  } else {
    return <Login />;
  }
};

export default Landing;
