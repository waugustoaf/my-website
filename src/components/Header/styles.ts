import styled from 'styled-components';
import { fromTop } from '../../styles/keyframes';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fromTop} 0.8s ease-in-out alternate;

  img {
    width: 5.125rem;
  }

  nav {
    width: 30rem;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 900px) {
    nav {
      display: none;
    }
  }
`;
