import styled from "styled-components";

export const Container = styled.footer`
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
