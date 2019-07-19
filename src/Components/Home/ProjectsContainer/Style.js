/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledProjectContainer = styled.div`
  background: #eee;
  padding-bottom: 12px;

  .holder {
    max-width: 1080px;
    margin: 0 auto;
    h2 {
      font-size: 2.4em;
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
    .holder {
      .projectsHolder {
        flex-direction: row;
      }
    }
  }
`;

export const StyledProject = styled.div`
  margin: 16px auto;
  padding: 10px;
  border: 4px solid #222;
  border-radius: 16px;

  background: #dfdfdf;
  width: 90vw;

  -webkit-box-shadow: 8px 12px 5px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 8px 12px 5px 0px rgba(0,0,0,0.25);
  box-shadow: 8px 12px 5px 0px rgba(0,0,0,0.25);

  transition: 1s;

  .imgContainer {
    text-align: center;
    margin: 8px 0;
    img { 
      width: 100%;
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
  
  .linkContainer {
    margin: 24px 0;

    a {
      text-decoration: none;
      padding: 8px;
      border: 3px solid crimson;
      border-radius: 4px;
      margin: 6px 12px 6px 0;
      
      list-style-type: none;
      font-weight: 700;
      font-size: 1.4em;
      
      color: white;
      background: crimson;

      transition: .5s;

      :hover {
        color: crimson;
        background: white;
        border: 3px solid crimson;
        transform: scale(1.05);
      }
    }
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
  @media (min-width: 1280px) {
    padding: 16px;
  }
`;

module.export = {
  StyledProjectContainer,
  StyledProject,
};
