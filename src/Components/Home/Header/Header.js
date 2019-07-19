/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { StyledHeader, CircleDown } from './Style';

const clickHandler = () => {
  console.log('clicked!');
};

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        I&apos;m Anthony!
        <span role="img" aria-label="hello"> 👋 </span>
        <br />
        I&apos;m a full-stack web developer.
      </h1>
      <p>
        <i className="fas fa-map-marked-alt" />
        Den Bosch, The Netherlands
        <span role="img" aria-label="hello"> 🇳🇱 </span>
      </p>

      <nav>
        <a
          href="https://github.com/anthonyjcampbell/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="https://twitter.com/anthonyjcampbel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter-square" />
        </a>
        <a
          href="https://www.linkedin.com/in/anthonyjcampbell/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>
        {/* Debate: onClick, go to `mailTo:` OR copy email address to clipboard OR
          have small popup text showing my email address */}
        <a
          href="mailto:anthony@anthonyjcampbell.com"
        >
          <i className="fas fa-at" />
        </a>
      </nav>
      {/* On click, move to Projects */}
      <CircleDown>
        <a href="#Projects">
          <i className="fas fa-arrow-circle-down" onClick={clickHandler} />
        </a>
      </CircleDown>
    </StyledHeader>
  );
};

export default Header;
