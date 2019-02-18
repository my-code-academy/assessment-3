import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header.component.js';
import CardGrid from './Components/CardGrid/CardGrid.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CardGrid/>
      </div>
    );
  }
}

export default App;
