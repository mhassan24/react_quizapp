import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainQuiz from "./component/MainQuiz";

class App extends Component {
  render() {
      return (
          <div className="App">
            <h1>React Quiz</h1>
          <MainQuiz />
          </div>
      );
  }
}

export default App;