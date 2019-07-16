/* eslint-disable react/no-array-index-key */
import React from 'react';
import { StyledProject } from './Style';

const Project = (project) => {
  const p = project.project;
  return (
    <StyledProject>
      <div>
        <img src="https://img.icons8.com/material/4ac144/256/camera.png" alt="" />
      </div>
      
      <h3>{p.title}</h3>
      
      <p>
        {p.description}
      </p>

      <ul>
        {p.technologies.map((tech, idx) => <li key={idx}>{tech}</li>)}
      </ul>
    </StyledProject>
  );
};

export default Project;
