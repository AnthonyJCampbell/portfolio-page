/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledBio = styled.div`
  padding: 16px;
  border-top: 2px solid #333;

  background: #222;
  color: white;
  h2 {
    font-size: 1.8em;
  }

  p {
    font-size: 1.2em;
    margin: 3px 0 9px;
  }

  h3 {
    margin: 6px 0;
    font-size: 1.6em;
    font-weight: 700;
  }

  h4 {

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

      transition: .3s;
      :hover {
        background: #333;
        transform: scale(1.05);
      }
    }
  }

  nav {
    div {

    }
  }
`;

module.export = {
  StyledBio,
};
