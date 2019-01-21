import React, { Component } from 'react';
import Intro from './Intro.js';
import Social from './Social.js';
import Highlights from './Highlights.js';
import Projects from './Projects.js';
import Skills from './Skills.js';

class Site extends Component {
  render() {
    return (
      <div className="site container">
        <Intro />
        <Social />
        <Highlights />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default Site;
