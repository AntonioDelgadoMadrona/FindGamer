import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

//import Wallpaper from './components/Wallpaper/Wallpaper';
import Header from "./components/Header/Header2";
// import Smartphone from "./components/Smartphone/Smartphone";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import Community from './components/Community/Community';
import Events from "./components/Events/Events";
import Game from './components/Game/Game';
import EventInfo from "./components/EventInfo/EventInfo";
import UserInfo from './components/UserInfo/UserInfo';
import Games from './components/Games/Games';

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {/* <Home /> */}
          {/* <Community /> */}
          {/* <Events /> */}
          {/* <Game /> */}
          {/* <EventInfo /> */}
          {/* <UserInfo /> */}
          {/* <Games /> */}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
