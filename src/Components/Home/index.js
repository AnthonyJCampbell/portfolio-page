import React from 'react';

import Bio from './Bio/Bio';
import Header from './Header/Header';
import ProjectsContainer from './ProjectsContainer/ProjectsContainer';

const Home = () => {
  return (
    <div>
      <Header />
      <ProjectsContainer />
      <Bio />
    </div>
  );
};

export default Home;

// module.exports = {
//   Bio,
//   Header,
//   Project,
//   ProjectsContainer,
// };
