import styled from 'styled-components';
import { fromTop, opacityFromZero } from '../../styles/keyframes';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fromTop} 0.8s ease-in-out alternate;

  img {
    width: 5.125rem;
  }

  nav#extended {
    width: 30rem;
    display: flex;
    justify-content: space-between;
  }

  nav#compiled {
    display: none;

    button {
      background: none;
      border: none;

      svg {
        font-size: 3rem;
        color: ${props => props.theme.colors.fontPrimary};
      }
    }
  }

  menu {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    animation: ${opacityFromZero} 0.5s ease-in-out;
    display: flex;

    > span {
      background-color: rgba(0, 0, 0, 0.6);
      display: inline-block;
      width: 60%;
      height: 100%;
    }

    > div {
      background-color: ${props => props.theme.colors.secondary};
      height: 100%;
      width: 40%;
      padding: 1.5rem;

      z-index: 100;

      > button#close {
        border: none;
        background-color: ${props => props.theme.colors.quaternary};
        border-radius: 1.2rem;
        margin-bottom: 1.5rem;

        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
        width: 3rem;

        svg {
          font-size: 1.6rem;
          margin: 0 0.5rem 0;
          color: ${props => props.theme.colors.fontPrimary};
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    nav#extended {
      display: none;
    }

    nav#compiled {
      display: flex;
    }
  }

  @media screen and (max-width: 600px) {
    menu {
      > span {
        width: 40%;
      }
      > div {
        width: 60%;
      }
    }
  }
`;
