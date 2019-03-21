import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import TopBar from './components/TopBar'
import Banner from './components/banner'
import Conheca from './components/Conheca'
import ConhecaInfos from './components/ConhecaInfos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Header />
        <Banner />
        <Conheca />
        <ConhecaInfos />
      </div>
    );
  }
}

export default App;
