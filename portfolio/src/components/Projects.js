import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
        <div id="projects">
          <h2>Projects</h2>
          <h3>Garner Engineering</h3>
          <ul>
            <li>An application that manages projects and reports for an engineering firm</li>
            <li>Django backend with a MySQL database</li>
            <li>Django authentication and session managementi for users</li>
            <li>Bootstrap + Django templating front end</li>
            <li>Deployed using Google Cloud's Google App Engine</li>
          </ul>
        </div>
    );
  }
}

export default Projects;
