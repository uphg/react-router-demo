import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

const About = () => <div>我是关于页</div>
const User = () => <div>我是用户页</div>
const Home = () => <div>我是首页</div>

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/user">User</Link>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
