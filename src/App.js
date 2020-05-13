import './App.css';
import Board from './components/Board';
import Result from './components/Result';

import React, { Component } from 'react';

class App extends Component {  
  render() {
    return (
      <div className="App">
        <div className="heading-div">
          <div className="main-heading">
            Tic Tac Toe
          </div>
        </div>

        <Board players="two" />
        <Result />
    </div>
    );
  }
}

export default App;