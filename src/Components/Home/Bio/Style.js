/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledBio = styled.div`
  padding: 16px;
  border-top: 2px solid #333;

  background: #222;
  color: white;
  h2 {
    font-size: 1.8em;
    font-weight: 700;
  }

  p {
    font-size: 1.2em;
    margin: 3px 0 9px;
  }

  h3 {
    margin: 16px 0;
    font-size: 1.6em;
    font-weight: 700;
  }

  h4 {
    font-size: 1.2em;
    margin: 8px 0;
  }

  /* Combine with the buttons found in Project Styles. Create Separate Skill Buttons */
  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      padding: 8px;
      border: 1px solid white;
      border-radius: 4px;
      margin: 4px;

      list-style-type: none;
      text-align: center;
      font-weight: 700;
      font-size: 1em;

      
      background: black;
      color: white;

      transition: .25s;

      :hover {
        color: white;
        background: crimson;
        transform: scale(1.05);
      }
    }
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    text-align: center;

    div {
      border: 2px solid white;
      border-radius: 8px;
      padding: 8px 16px;
      margin: 8px 24px;
      min-width: 65%;

      
      background: crimson;
      color: white;

      font-size: 1.4em;
      font-weight: 700;

      transition: 0.5s;
      cursor: pointer;

      i { 
        margin-left: 8px;
      }
      :hover {
        transform: scale(1.05);
        border: 2px solid crimson;
        color: crimson;
        background: white;
      }
    }
  }
`;

module.export = {
  StyledBio,
};
