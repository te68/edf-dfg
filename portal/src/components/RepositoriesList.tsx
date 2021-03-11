import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { fetchUser } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repos);

  const onClick = () => {
    fetchUser("me@yazanalmatar.com", "mypassword");
  };
  const showState = () => {
    console.log(data);
  };
  return (
    <div>
      <button onClick={onClick}>Click me</button>
      <button onClick={showState}>Click me again</button>
      {localStorage.getItem("token") ? <h1>Logged in</h1> : <h1>Logged out</h1>}
    </div>
  );
};

export default RepositoriesList;
