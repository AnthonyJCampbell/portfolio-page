import React from 'react';


const Header = () => {
  return (
    <header>
      <h1>
        Hi, I&apos;m Anthony Campbell!
        <span role="img" aria-label="hello"> 👋 </span>
        <br />
        I&apos;m a full-stack web developer.
      </h1>
      <h3>
        <p>
          <i className="fas fa-map-marked-alt" />
          Den Bosch, The Netherlands
          <span role="img" aria-label="hello"> 🇳🇱 </span>
        </p>
      </h3>
      {/* Links */}
      <nav>
        <div><i className="fab fa-github" /></div>
        <div><i className="fab fa-twitter-square" /></div>
        <div><i className="fab fa-linkedin" /></div>
        <div><i className="fas fa-at" /></div>
        {/*
          - https://github.com/AnthonyJCampbell
          - https://twitter.com/AnthonyJCampbel
          - Host?
          - anthony@nthonyjcampbell.com
        */}
      </nav>
      <p><i className="fas fa-arrow-circle-down" /></p>
    </header>
  );
};

export default Header;
