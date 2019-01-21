import React, { Component } from 'react';
import mediumLogo from '../static/iconmonstr-medium-4-64.png';
import linkedinLogo from '../static/iconmonstr-linkedin-4-64.png';
import twitterLogo from '../static/iconmonstr-twitter-4-64.png';
import githubLogo from '../static/iconmonstr-github-1-64.png';

class Social extends Component {
  render() {
    return (
      <div className="social">
        <a href="http://medium.com/@BennettGarner/">
          <img src={mediumLogo} alt="Medium Logo" className="p-2" />
        </a>
        <a href="https://www.linkedin.com/in/bennettgarner/">
          <img src={linkedinLogo} alt="LinkedIn Logo" className="p-2" />
        </a>
        <a href="https://twitter.com/BennettGarner">
          <img src={twitterLogo} alt="Twitter Logo" className="p-2" />
        </a>
        <a href="https://github.com/bennett39">
          <img src={githubLogo} alt="GitHub Logo" className="p-2" />
        </a>
      </div>
    );
  }
}

export default Social;
