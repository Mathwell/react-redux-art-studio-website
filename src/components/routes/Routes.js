import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import ThemeSwitcher from "./ThemeSwitcher";
import Form from "./Gallery";
import Upload from "./Upload";

export default () =>
  <Switch>    
    <React.Fragment>         
         <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/theme" component={ThemeSwitcher} />
         <Route exact path="/enter" component={Form} />
         <Route exact path="/upload" component={Upload}/>
    </React.Fragment>
  </Switch>;