/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { StyledProject } from './Style';

const clickHandler = (tech) => { console.log(tech); };

const Project = (project) => {
  const p = project.project;
  return (
    <StyledProject>
      <div className="imgContainer">
        <img src="https://img.icons8.com/material/4ac144/256/camera.png" alt="" />
      </div>

      <h3>{p.title}</h3>

      <p>
        {p.description}
      </p>

      <div className="linkContainer">
        <a href="#">
          GitHub
        </a>
        <a href="#">
          Demo
        </a>
      </div>

      <ul>
        {p.technologies.map((tech, idx) => {
          return (
            <li key={idx} onClick={() => clickHandler(tech)}>
              {tech}
            </li>
          );
        })
        }
      </ul>
    </StyledProject>
  );
};

export default Project;
