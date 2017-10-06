import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Dashboard from './dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App;
