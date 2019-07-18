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
    width: 40%;
    max-width: 320px;
    margin: 24px auto;
    font-size: 1.8em;

    i {
      border: 2px solid #222;
      padding: 8px;
      transition: 1s;
      :hover {
        color: crimson;
        transform: scale(1.2);
        border: 2px solid crimson;
        border-radius: 100%;
      }
    }
  }

  @media (min-width: 720px) {
    padding: 30vh 40px 0;
    h1 {
      font-size: 2.6em;
    }
    p {
      font-size: 1.6em;
      text-decoration: underline; 
    }

    nav {
      i {
        transform: scale(1.2);
      }
    }
  }

  @media (min-width: 1400px) {
    h1 {
      font-size: 3em;
    }
    p {
      font-size: 1.8em;
      i {
        transform: scale(1.2);
        margin-right: 16px;
      }
    }
  }
`;

const pulse = keyframes`
  0% {transform: scale(1);};
  50% {transform: scale(1.15);}
  100% {transform: scale(1);}
`;

const heavyPulse = keyframes`
  0% {transform: scale(1);};
  50% {transform: scale(1.3);}
  100% {transform: scale(1);}
`;

export const CircleDown = styled.div`
  width: 100%;
  position: absolute;
  bottom: 2vh;
  left: 0;

  font-size: 2em;
  text-align: center;
  a {
    color: white;
    transition: 2s;
    i {
      color: crimson;
      border: 2px solid white;
      background: white;
      margin: 0 auto;
      border-radius: 100%;
      cursor: pointer;
      transition: 0.5s;
      animation: ${pulse} 2s infinite;
      :hover {
        border: 2px solid crimson;
        background: crimson;
        color: white;
      }
    }
  }
  @media (min-width: 720px) {
    a {
      
      i {
        margin-bottom: 2.5vh;
        font-size: 1.2em;
        animation: ${heavyPulse} 2s infinite;
      }
    }
  }

  @media (min-width: 1600px) {
    a {
      
      i {
        font-size: 1.4em;
      }
    }
  }
`;

module.export = {
  StyledHeader,
  CircleDown,
};
