import Login from "./Login";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Landing from "./Landing";
const App = () => {
  const { data, error, loading } = useTypedSelector((state) => state.repos);
  console.log(data);
  {
    return (
      <div>
        <Landing />
      </div>
    );
  }
};

export default App;
