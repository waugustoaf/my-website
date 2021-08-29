import styled from 'styled-components';

interface ImageProps {
  src: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 32rem;
  border-radius: 7px;
  background-color: ${props => props.theme.colors.quaternary};
  box-shadow: 0px 0px 28px -2px rgba(0, 0, 0, 0.4);
  border: #fff 2px solid;
`;

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 20rem;
  border-radius: 7px 7px 0 0;

  background-image: ${props => `linear-gradient(180deg, rgba(74, 75, 87, 0), #4a4b57),
    url(${props.src});`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Infos = styled.div`
  height: 13rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-weight: bold;
    font-size: 2rem;
  }

  p {
    display: -webkit-box;
    font-size: 0.925rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  span {
    width: 100%;

    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      border-radius: 7px;

      width: 48%;
      background: ${props => props.theme.colors.tertiary};
      color: ${props => props.theme.colors.fontPrimary};

      font-weight: bold;
      font-size: 1.2rem;

      transition: filter 0.2s;

      svg {
        margin-right: 0.8rem;
        font-size: 1.5rem;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
