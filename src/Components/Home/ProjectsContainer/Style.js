/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledProject = styled.div`
  margin: 0;
  padding: 10px;
  background: #ccc;
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
    justify-content: space-evenly;
    li {
      list-style-type: none;
      text-align: center;
      min-width: 80px;
      padding: 6px 4px;
      border: 1px solid blue;
    }
  }
`;

module.export = {
  StyledProject,
};
