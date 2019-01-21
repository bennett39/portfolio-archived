import React, { Component } from 'react';
import mediumLogo from '../static/iconmonstr-medium-4-64.png';
import linkedinLogo from '../static/iconmonstr-linkedin-4-64.png';
import twitterLogo from '../static/iconmonstr-twitter-4-64.png';
import githubLogo from '../static/iconmonstr-github-1-64.png';

class Social extends Component {
  render() {
    return (
      <div className="social">
        <img src={mediumLogo} alt="Medium Logo" className="p-2" />
        <img src={linkedinLogo} alt="LinkedIn Logo" className="p-2" />
        <img src={twitterLogo} alt="Twitter Logo" className="p-2" />
        <img src={githubLogo} alt="GitHub Logo" className="p-2" />
      </div>
    );
  }
}

export default Social;
