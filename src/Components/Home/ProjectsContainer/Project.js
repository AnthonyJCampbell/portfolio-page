/* eslint-disable react/no-array-index-key */
import React from 'react';

const Project = (project) => {
  return (
    <div>
      <h3>{project.project.title}</h3>
      <ul>
        {project.project.technologies.map((tech, idx) => <li key={idx}>{tech}</li>)}
      </ul>
    </div>
  );
};

export default Project;
