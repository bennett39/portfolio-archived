import React, { Component } from 'react';

class Site extends Component {
  render() {
    return (
      <div className="site">
        <h1>Bennett Garner</h1>
        <span>Django/NodeJS Backend Developer</span>
        <p>This is a paragraph with <strong>bold</strong>.</p>
        <p>A paragraph with <em>italics</em>.</p>
        <code>A code snippet code.snip()</code>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
      </div>
    );
  }
}

export default Site;
