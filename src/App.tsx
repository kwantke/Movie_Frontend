import "./App.css";
import {BrowserRouter as Router, HashRouter, Route} from "react-router-dom";
import Join from "./routes/Join";
import {Login} from "./routes/Login";
import Main from "./routes/Main";
import Detail from "./routes/Detail";
import {useEffect} from "react";
import Header from "./components/Common/Header";

function App() {
  return (
    <div className="App">
        <div className="app">
          <Header/>
            <Router>
                <Route path="/" exact component={Login}/>
                <Route path="/join" exact component={Join}/>
                <Route path="/main" exact component={Main}/>
                <Route path="/detail/:id" exact component={Detail}/>
            </Router>
        </div>
    </div>
  );
}

export default App;
