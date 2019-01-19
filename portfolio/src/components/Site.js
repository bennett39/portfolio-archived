import React, { Component } from 'react';
import Intro from './Intro.js';
import TicTacToe from './TicTacToe.js';

class Site extends Component {
  render() {
    return (
      <div className="site container">
        <Intro />
        <TicTacToe />
      </div>
    );
  }
}

export default Site;
