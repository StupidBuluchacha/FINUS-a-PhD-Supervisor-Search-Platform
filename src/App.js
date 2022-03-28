import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import {Home }from "./pages/home";
import Recommendation from "./pages/recommendation";
import profList from "./pages/profList";
import './App.css'
import ProfDetails from "./pages/profDetails";
import AddProfessor from "./pages/addProfessor";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recommendation/:flag?" component={Recommendation} />
        <Route path="/profList" component={profList} />
        <Route path="/profDetails/:id" component={ProfDetails} />
        <Route path="/add/:id" component={AddProfessor} />
        <Route path="/edit/:id" component={() => (<AddProfessor edit={true} />)} />
      </Switch>
    </Router>
  );
}
export default App;
