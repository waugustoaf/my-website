import styled, { css } from 'styled-components';
import {
  fromBottom,
  fromRight,
  fromTop,
  infinityDown,
  infinityZoom,
  rotate3d,
} from '../keyframes';

interface BackgroundProps {
  secondary?: number;
}

interface SectionProps {
  type: 'primary' | 'secondary' | 'tertiary';
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Background = styled.div<BackgroundProps>`
  width: 100%;
  min-height: 100vh;

  ${props =>
    !!props.secondary &&
    css`
      background: ${props.theme.colors.secondary};
    `}
`;

export const Section = styled.section<SectionProps>`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${props =>
    props.type === 'primary' &&
    css`
      height: 100vh;
    `}

  ${props =>
    props.type === 'secondary' &&
    css`
      flex-direction: row;
      align-items: center;
      padding: 0 2rem;

      @media screen and (max-width: 900px) {
        flex-direction: column;
        padding: 5rem 0;
      }
    `}
`;

export const Presentation = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fromTop} 0.8s ease-in-out alternate;

  > span {
    font-weight: bold;
    font-size: 5rem;

    display: flex;
    flex-direction: column;

    animation: ${rotate3d} 1s ease-in-out;

    &::after {
      content: '';
      width: 4rem;
      height: 0.7rem;
      background-color: ${props => props.theme.colors.tertiary};
      margin-top: 1rem;
    }

  }
  
  div {
    width: 30rem;
    animation: ${fromRight} 1s ease-in-out;

    span {
      font-size: 1.2rem;
      color: ${props => props.theme.colors.fontSecondary};
    }

    h2 {
      margin-top: 2.2rem;
      font-size: 2rem;
      font-weight: bold;
    }

    p {
      margin-top: 2.5rem;
      color: ${props => props.theme.colors.fontSecondary};
    }
  }

  @media screen and (max-width: 900px) {
    > div {
      display: none;
    }

    > span {
      font-size: 3.5rem;
    } 
  }
`;

export const MediasAndHistory = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fromBottom} 0.8s ease-in-out;

  > span {
    display: inline-block;
    width: 30rem;

    button {
      display: flex;
      align-items: center;

      background: transparent;
      border: none;
      color: ${props => props.theme.colors.tertiary};
      font-size: 1.6rem;
      font-weight: bold;
      transition: filter 0.2s;

      > svg {
        margin-left: 2.4rem;
        animation: ${infinityDown} 1s infinite ease-in-out;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  @media screen and (max-width: 900px) {
    > span {
      display: none;
    }
  }
`;

export const Contacts = styled.section`
  width: 100vh;
  max-width: 32.5rem;

  display: flex;
  flex-direction: column;

  span {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.fontSecondary};
  }

  h2 {
    font-size: 2.2rem;
    font-weight: bold;
    margin-top: 6rem;
  }

  p {
    margin-top: 2rem;
    color: ${props => props.theme.colors.fontSecondary};
    font-size: 1.3rem;
  }

  a {
    margin-top: 9.5rem;

    display: flex;
    align-items: center;

    text-decoration: none;
    cursor: pointer;
    color: ${props => props.theme.colors.tertiary};
    font-weight: bold;
    font-size: 1.6rem;

    transition: filter 0.2s;

    svg {
      margin-left: 3rem;
      animation: ${infinityZoom} 1s infinite ease-in-out;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: 100%;
    padding: 0 2rem;
    margin-bottom: 2rem;
  }
`;

export const History = styled.section`
  width: 30vw;

  h2 {
    font-size: 2.2rem;
    font-weight: bold;
    text-align: justify;
  }

  > p {
    margin-top: 4.75rem;
    font-size: 1.3rem;
    text-align: justify;
    color: ${props => props.theme.colors.fontSecondary};
  }

  > span {
    margin-top: 3.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;

      p {
        color: ${props => props.theme.colors.tertiary};
        font-size: 3.5rem;
        font-weight: bold;
      }

      span {
        margin-left: 1rem;
      }
    }
  }

  button {
    display: flex;
    align-items: center;

    background: transparent;
    border: none;
    color: ${props => props.theme.colors.tertiary};
    font-size: 1.6rem;
    font-weight: bold;
    transition: filter 0.2s;

    > svg {
      margin-left: 2.4rem;
      animation: ${infinityDown} 1s infinite ease-in-out;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media screen and (max-width: 900px) {
    width: 100vw;
    padding: 0 2rem;
    margin-top: 2rem;

    > span {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 20rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.colors.secondary};

  img {
    width: 3rem;
  }

  p {
    margin-top: 4rem;

    font-weight: bold;
    font-weight: 1.2rem;

    span {
      font-weight: normal;
    }
  }

  button {
    margin-top: 4rem;

    display: flex;
    flex-direction: row;
    align-items: center;

    background: none;
    border: none;
    color: ${props => props.theme.colors.fontSecondary};
    font-weight: bold;

    svg {
      margin-left: 1rem;
    }
  }
`;
