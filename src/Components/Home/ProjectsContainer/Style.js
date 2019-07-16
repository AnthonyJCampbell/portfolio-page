/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledProjectContainer = styled.div`
  h2 {
    font-size: 1.8em;
    padding: 16px 16px 0px;
    font-weight: 700;
  }
`;

export const StyledProject = styled.div`
  margin: 16px;
  padding: 10px;
  border: 2px solid #222;
  border-radius: 16px;

  background: #eee;


  div {
    text-align: center;
    margin: 8px 0;
    img { 
      border: 2px solid #222;
      margin: 0;
    }
  }
  h3 {
    margin: 6px 0;
    font-size: 1.6em;
    font-weight: 700;
  }

  p {
    font-size: 1.2em;
    margin: 3px 0 9px;
  }
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
        border: 1px solid crimson;
        color: crimson;
        background: #333;
        transform: scale(1.05);
      }
    }
  }
`;

module.export = {
  StyledProjectContainer,
  StyledProject,
};
