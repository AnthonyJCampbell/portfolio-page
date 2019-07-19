import React from 'react';
import Project from './Project';

import { StyledProjectContainer } from './Style';

const mockProjectsArray = [
  {
    title: 'Tipsease',
    id: 0,
    description: 'An app that allows servers and waiteresses to receive tips directly. Built with React, Redux, Express, and Firebase. At the moment, the app is still incomplete due to a compromised back-end',
    img: '',
    demoLink: 'https://tipsease-1.netlify.com/',
    gitHubLink: 'https://github.com/tipsease03072019/tipsease',
    technologies: ['React', 'Redux', 'Express', 'Firebase', 'SASS', 'Git'],
  },
  {
    title: 'Essentialism',
    id: 1,
    description: 'The Way of the Essentialist involves doing less, but better, so you can make the highest possible contribution. It’s about getting only the right things done.',
    img: '',
    demoLink: '',
    gitHubLink: '',
    technologies: ['React', 'Redux', 'Less', 'SQLite3', 'Node.js', 'Express', 'Jest', 'Git'],
  },
  {
    title: 'Project #3',
    id: 2,
    description: 'Doloribus nesciunt quod temporibus illum delectus! Tempora dolores ullam alias libero ut rem ducimus explicabo debitis distinctio? Laboriosam fuga officia laudantium corrupti.',
    img: '',
    demoLink: '',
    gitHubLink: '',
    technologies: ['React', 'Redux', 'Less', 'SQLite3', 'Node.js', 'Express', 'Jest', 'Git'],
  },
  {
    title: 'Project #4',
    id: 3,
    description: 'Doloribus nesciunt quod temporibus illum delectus! Tempora dolores ullam alias libero ut rem ducimus explicabo debitis distinctio? Laboriosam fuga officia laudantium corrupti.',
    img: '',
    demoLink: '',
    gitHubLink: '',
    technologies: ['React', 'Redux', 'Less', 'SQLite3', 'Node.js', 'Express', 'Jest', 'Git'],
  },
];

const ProjectsContainer = () => {
  return (
    <StyledProjectContainer id="Projects">
      <div className="holder">
        <h2>My Projects</h2>
        <div className="projectsHolder">
          {mockProjectsArray.map((project) => {
            return (
              <Project key={project.id} project={project} />
            );
          })}
        </div>
      </div>
    </StyledProjectContainer>
  );
};

export default ProjectsContainer;
