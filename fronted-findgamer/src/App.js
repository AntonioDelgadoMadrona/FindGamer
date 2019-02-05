import React, { Component } from "react";

import Header from "./components/Header/Header2";
// import Smartphone from "./components/Smartphone/Smartphone";
import Carousel from "./components/Carousel/Carousel";
import Noticias from './components/News/News';
import Lastgames from './components/LastGames/Lastgames';
import ExpectedGames from './components/ExpectedGames/ExpectedGames';
import Recommendeds from './components/Recommendeds/Recommendeds';
import Footer from "./components/Footer/Footer";

import "./App.css";
import { Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* Todo el contenido */}
        <Container className="padre">
          {/* <Smartphone /> */}
          <Carousel />
          <Noticias />
          <Lastgames />
          <ExpectedGames />
          <Recommendeds />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
