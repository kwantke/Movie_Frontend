import {BrowserRouter as Router, Route} from "react-router-dom";
import Join from "./routes/Join";
import Login from "./routes/Login";
import Main from "./routes/Main";

function App() {
  return (
    <div className="App">
        <div className="app">
            <Router>
                <Route path="/" exact component={Login}/>
                <Route path="/join" exact component={Join}/>
                <Route path="/main" exact component={Main}/>
            </Router>
        </div>
    </div>
  );
}

export default App;
