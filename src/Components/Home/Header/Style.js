/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

export const StyledHeader = styled.header`
  color: white;
  background: #222;
  height: 100vh;
  width: 100%;
  padding: 20vh 40px 0;
  h1 {
    text-align: center;
    font-size: 2.2em;
    margin-bottom: 16px;
  }

  p {
    font-size: 1.2em;
    text-align: center;
    i {
      margin-right: 8px;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    min-width: 160px;
    width: 30%;
    max-width: 320px;
    margin: 24px auto;
    font-size: 1.8em;

    i {
      border: 2px solid #222;
      padding: 5px;
      transition: 1s;
      :hover {
        transform: scale(1.1);
        border: 2px solid crimson;
        border-radius: 100%;
      }
    }
  }

  
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  };

  50% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(1);
  }
`;

export const CircleDown = styled.div`
  width: 100%;
  position: absolute;
  bottom: 30px;
  left: 0;

  font-size: 2em;
  text-align: center;
  a {
    color: white;
    transition: 2s;
    i {
      margin: 0 auto;
      border-radius: 100%;
      cursor: pointer;
      transition: 0.5s;
      animation: ${pulse} 2s infinite;
      :hover {
        border: 1px solid white;
        background: white;
        color: #222;
      }
    }
  }
`;

module.export = {
  StyledHeader,
  CircleDown,
};
