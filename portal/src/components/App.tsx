import Login from "./Login";
import { useActions } from "../hooks/useActions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import EditEvent from "./EditEvent";
import Landing from "./Landing";
const App = () => {
  const { data, error, loading } = useTypedSelector((state) => state.auth);
  console.log(data);
  {
    return (
      <div className="container">
        <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/event" component={EditEvent} />
        </Router>
      </div>
    );
  }
};

export default App;
