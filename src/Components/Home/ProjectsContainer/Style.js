/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledProjectContainer = styled.div`
  background: white;
  div {
    max-width: 1080px;
    margin: 0 auto;
    h2 {
      font-size: 1.8em;
      padding: 24px 5vw 12px;
      font-weight: 700;
    }
  
    .projectsHolder {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      max-width: 1080px;
      margin: 0 auto;
    }
  }
  @media (min-width: 720px) {
    div {
      .projectsHolder {
        flex-direction: row;
      }
    }
  }
`;

export const StyledProject = styled.div`
  margin: 16px auto;
  padding: 10px;
  border: 2px solid #222;
  border-radius: 16px;

  background: #eee;
  width: 90vw;

  -webkit-box-shadow: 8px 12px 5px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 8px 12px 5px 0px rgba(0,0,0,0.25);
  box-shadow: 8px 12px 5px 0px rgba(0,0,0,0.25);

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
  @media (min-width: 720px) {
    width: 45%;
    border: 3px solid #222;

    -webkit-box-shadow: 6px 9px 5px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 6px 9px 5px 0px rgba(0,0,0,0.25);
    box-shadow: 6px 9px 5px 0px rgba(0,0,0,0.25);
  }
`;

module.export = {
  StyledProjectContainer,
  StyledProject,
};
