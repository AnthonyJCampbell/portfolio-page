/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { StyledBio } from './Style';

const clickHandler = () => {
  console.log('clicked!');
};


const Bio = () => {
  return (
    <StyledBio>
      <h2>About Me</h2>
      <p>
        Over the course of my development career,
        I have focused on become the best all-rounder I can be.
        I&apos;ve had a lot of experience with agile/lean teams working with the latest development
        processes and continuous deployment practices.
      </p>
      
      <div>
        <div className="skills">
          <h3>Skills</h3>
          {/* Stretch: Dropdowns that reveal the skills */}
          <h4>Languages &amp; Frameworks</h4>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>C</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>React Native</li>
          </ul>

          <h4>Databases</h4>
          <ul>
            <li>MongoDB</li>
            <li>PostGreSQL</li>
            <li>SQLite3</li>
          </ul>

          <h4>Tools &amp; Testing</h4>
          <ul>
            <li>Git</li>
            <li>Jest</li>
            <li>Enzyme</li>
            <li>Babel</li>
            <li>OAuth</li>
            <li>Webpack</li>
          </ul>
        </div>

        <div className="links">
          <h3>Links</h3>
        </div>
        <div className="linksHolder">
          <nav>
            <div
              className="resume"
              onClick={clickHandler}
            >
              My Resume
            </div>
            <div
              onClick={clickHandler}
            >
              <i className="fab fa-github" />
              GitHub
            </div>
            <div
              onClick={clickHandler}
            >
              <i className="fas fa-at" />
              Email
            </div>
            <div
              onClick={clickHandler}
            >
              <i className="fab fa-twitter-square" />
              Twitter
            </div>
          </nav>
        </div>
        <p className="love">
          Made with
          <span role="img" aria-label="heart">
          ❤️
          </span>
          in the Netherlands
        </p>
      </div>
    </StyledBio>
  );
};

export default Bio;
