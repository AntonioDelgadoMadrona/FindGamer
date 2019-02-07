import React, { Component } from "react";

//import Wallpaper from './components/Wallpaper/Wallpaper';
import Header from "./components/Header/Header2";
// import Smartphone from "./components/Smartphone/Smartphone";
import Footer from "./components/Footer/Footer";
//import Home from './components/Home/Home';
//import Community from './components/Community/Community';
//import Events from './components/Events/Events';
import Game from './components/Game/Game';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/*<Home />
        <Community />
        <Events />*/}
        <Game />
        <Footer />
      </div>
    );
  }
}

export default App;
