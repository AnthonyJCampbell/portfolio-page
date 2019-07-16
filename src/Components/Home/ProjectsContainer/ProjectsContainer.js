/* eslint-disable react/no-array-index-key */
import React from 'react';
import Project from './Project';

const mockProjectsArray = [
  {
    title: 'Tipsease',
    description: 'An app that allows servers and waiteresses to receive tips directly. Built with React, Redux, Express, and Firebase',
    img: '',
    demoLink: 'https://tipsease-1.netlify.com/',
    gitHubLink: 'https://github.com/tipsease03072019/tipsease',
    technologies: ['React', 'Redux', 'Express', 'Firebase', 'SASS'],
  },
  {
    title: 'Essentialism',
    description: 'The Way of the Essentialist involves doing less, but better, so you can make the highest possible contribution. It’s about getting only the right things done. Built with',
    img: '',
    demoLink: '',
    gitHubLink: '',
    technologies: ['React', 'Redux', 'SQLite3', 'Node.js', 'Express',],
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
