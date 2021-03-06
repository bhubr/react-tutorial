import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Import du composant Footer
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* partie header à remplacer par un composant Header */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {/* partie paragraphe à remplacer par un composant Paragraph */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/* Ci-dessous: insertion du composant Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
