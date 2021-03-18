import { BrowserRouter as Router, Route } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import EditEvent from "./Events/EditEvent";
import EditContent from "./Contents/EditContent";
import Landing from "./Landing";
const App = () => {
  const { data, error, loading } = useTypedSelector((state) => state.auth);
  console.log(data);
  {
    return (
      <div className="container">
        <Router>
          <Route exact path="/a" component={Landing} />
          <Route exact path="/a/event" component={EditEvent} />
          <Route exact path="/a/content" component={EditContent} />
        </Router>
      </div>
    );
  }
};

export default App;
