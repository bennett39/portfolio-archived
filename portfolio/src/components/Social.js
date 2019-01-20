import React, { Component } from 'react';
import mediumLogo from '../static/iconmonstr-medium-4-64.png';

class Social extends Component {
  render() {
    return (
      <div className="social">
        <img src={mediumLogo} alt="Medium Logo" />
      </div>
    );
  }
}

export default Social;
