import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.hgroup`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 8rem;
    font-size: 3.4rem;
  }

  h2 {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    color: ${props => props.theme.colors.fontSecondary};
  }
`;

export const Cards = styled.div`
  margin: 6rem auto 6rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7rem;

  @media screen and (max-width: 1920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 1220px) {
    grid-template-columns: 1fr;
  }
`;
