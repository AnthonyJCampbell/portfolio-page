/* eslint-disable react/no-array-index-key */
import React from 'react';
import Project from './Project';

const mockProjectsArray = [
  {
    title: 'Tipsease',
    technologies: ['React', 'Redux'],
  },
  {
    title: 'Essentialism',
    technologies: ['SQLite3', 'Node.js', 'Express', 'React', 'Redux'],
  },
];

const ProjectsContainer = () => {
  return (
    <div>
      {mockProjectsArray.map((project, idx) => {
        return (
          <Project key={idx} project={project} />
        );
      })}
    </div>
  );
};

export default ProjectsContainer;
