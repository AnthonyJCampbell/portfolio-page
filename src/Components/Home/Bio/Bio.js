import React from 'react';
import { StyledBio } from './Style';

const Bio = () => {
  return (
    <StyledBio>
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Nemo doloremque rerum et eum amet exercitationem, quasi a unde.
        At placeat exercitationem molestias ea ab praesentium,
        perspiciatis id reiciendis blanditiis vitae.
      </p>

      <h3>Skills</h3>
      {/* Dropdowns that reveal the skills */}
      <h6>Frameworks</h6>
      <ul>
        <li>React</li>
        <li>Angular 2</li>
        <li>Vue</li>
        <li>Express</li>
        <li>Redux</li>
      </ul>
      <h6>Databases</h6>
      <ul>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>SQLite3</li>
      </ul>

      <nav>
        <div>Resume</div>
        <div>GitHub</div>
        <div>Twitter</div>
        <div>Email</div>
      </nav>
    </StyledBio>
  );
};

export default Bio;
