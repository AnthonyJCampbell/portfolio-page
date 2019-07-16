/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledProjectContainer = styled.div`

`;

export const StyledProject = styled.div`
  margin: 16px;
  padding: 10px;
  border: 2px solid #222;
  border-radius: 16px;

  background: #eee;


  div {
    text-align: center;
    img { 
      border: 1px solid red;
      margin: 0;
    }
  }
  h3 {
    margin: 6px 0;
  }

  p {
    margin: 3px 0 9px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      list-style-type: none;
      text-align: center;
      padding: 6px;
      font-weight: 700;
      background: black;
      color: white;
      border: 1px solid white;
      margin: 4px;
    }
  }
`;

module.export = {
  StyledProjectContainer,
  StyledProject,
};
