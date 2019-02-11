import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header2";
// import Smartphone from "./components/Smartphone/Smartphone";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Community from "./components/Community/Community";
import Events from "./components/Events/Events";
import Game from "./components/Game/Game";
import EventInfo from "./components/EventInfo/EventInfo";
import UserInfo from "./components/UserInfo/UserInfo";
import Games from "./components/Games/Games";
import FormSign from "./components/FormSign/FormSign";

import "./App.css";

const Style = {
  backgroundImage: `url(${require("./img/fondo-" +
    (1 + Math.round(Math.random() * 11)) +
    ".jpg")})`
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={Style}>
          <Header />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/community" component={Community} />
            <Route path="/games" exact component={Games} />
            <Route path="/games/:id" component={Game} />
            <Route path="/events" exact component={Events} />
            <Route path="/events/:id" component={EventInfo} />
            <Route path="/user" component={UserInfo} />
            <Route path="/singin" component={FormSign} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
