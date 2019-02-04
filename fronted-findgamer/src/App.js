import React, { Component } from 'react';

import Header from './components/Header/Header';
import Smartphone from './components/Smartphone/Smartphone';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Smartphone />
        <Footer />
      </div>
    );
  }
}

export default App;