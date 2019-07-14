import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>
        Hi!
        <span role="img" aria-label="hello"> 👋 </span>
        I&apos;m Anthony Campbell!
      </h1>
      <h2>
        I&apos;m a full-stack web developer based in Den Bosch, the Netherlands
      </h2>
      {/* Links */}
      <nav>
        <div>Git</div>
        <div>Twitter</div>
        <div>Resume</div>
        <div>email</div>
        {/*
          - https://github.com/AnthonyJCampbell
          - https://twitter.com/AnthonyJCampbel
          - Host?
          - anthony@nthonyjcampbell.com
        */}
      </nav>
    </header>
  );
};

export default Header;
