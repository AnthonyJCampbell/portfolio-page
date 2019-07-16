import React from 'react';
import Project from './Project';

import { StyledProjectContainer } from './Style';

const mockProjectsArray = [
  {
    title: 'Tipsease',
    id: 1,
    description: 'An app that allows servers and waiteresses to receive tips directly. Built with React, Redux, Express, and Firebase',
    img: '',
    demoLink: 'https://tipsease-1.netlify.com/',
    gitHubLink: 'https://github.com/tipsease03072019/tipsease',
    technologies: ['React', 'Redux', 'Express', 'Firebase', 'SASS'],
  },
  {
    title: 'Essentialism',
    id: 2,
    description: 'The Way of the Essentialist involves doing less, but better, so you can make the highest possible contribution. It’s about getting only the right things done. Built with',
    img: '',
    demoLink: '',
    gitHubLink: '',
    technologies: ['React', 'Redux', 'SQLite3', 'Node.js', 'Express'],
  },
];

const ProjectsContainer = () => {
  return (
    <StyledProjectContainer>
      {mockProjectsArray.map((project) => {
        return (
          <Project key={project.id} project={project} />
        );
      })}
    </StyledProjectContainer>
  );
};

export default ProjectsContainer;
