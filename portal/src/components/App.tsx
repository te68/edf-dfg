import Login from "./Login";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Landing from "./Landing";
const App = () => {
  const { data, error, loading } = useTypedSelector((state) => state.auth);
  console.log(data);
  {
    return (
      <div className="container">
        <Landing />
      </div>
    );
  }
};

export default App;
