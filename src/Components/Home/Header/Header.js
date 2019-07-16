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
        <div><i className="fab fa-github" /></div>
        <div><i className="fab fa-twitter-square" /></div>
        <div><i className="fab fa-linkedin" /></div>
        {/* Debate: onClick, go to `mailTo:` OR copy email address to clipboard OR
          have small popup text showing my email address */}
        <div><i className="fas fa-at" /></div>
      </nav>
      {/* On click, move to Projects */}
      <CircleDown>
        <i className="fas fa-arrow-circle-down" onClick={clickHandler} />
      </CircleDown>
    </StyledHeader>
  );
};

export default Header;
