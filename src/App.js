import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import TopBar from './components/TopBar'
import Banner from './components/banner'
import Conheca from './components/Conheca'
import Porque from './components/Porque'
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
        <Porque />
      </div>
    );
  }
}

export default App;
