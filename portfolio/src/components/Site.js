import React, { Component } from 'react';
import Intro from './Intro.js';
import Social from './Social.js';

class Site extends Component {
  render() {
    return (
      <div className="site container">
        <Intro />
        <Social />
      </div>
    );
  }
}

export default Site;
