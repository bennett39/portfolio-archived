import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div id="skills">
        <h2>Skills</h2>
          <p>I mostly <a href="https://medium.com/@BennettGarner/why-i-code-in-python-a1e4012eb859" rel="noopener noreferrer" target="_blank">code in Python</a>. I also know C and JavaScript.</p>
          <p>I like using Django as a backend. I started learning NodeJS more recently.</p>
          <p>React is the front-end library I know best.</p>
          <p>I actually like SQL and am pretty good at writing some tricky queries.</p>
          <p>I love and rely on Bootstrap to prettify my sites.</p>
          <p>I'm a Linux user. I'm running Ubuntu 16.04, and I spend most of my time on the command line.</p>
          <p>Vim is my editor of choice. You can check out <a href="https://github.com/bennett39/hello-world" rel="noopener noreferrer" target="_blank">my vimrc and bashrc on Github</a>.</p>
      </div>
    );
  }
}

export default Skills;
