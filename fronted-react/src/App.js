import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import Wallpaper from "./components/Wallpaper/Wallpaper";
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

import wallpaper1 from "./img/fondo-6.jpg";

const Style = {
  backgroundImage: `url(${wallpaper1})`
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={Style}>
          <Header />
          <img src={wallpaper1} className="imagen-fondo" alt="" />
          <Route path="/home" component={Home} />
          <Route path="/community" component={Community} />
          <Route path="/games" component={Games} />
          <Route path="/events" component={Events} />
          <Route path="/event/info" component={EventInfo} />
          <Route path="/game" component={Game} />
          <Route path="/user" component={UserInfo} />
          <Route path="/singin" component={FormSign} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
