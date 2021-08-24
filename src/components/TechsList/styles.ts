import styled from 'styled-components';

interface CustomButtonProps {
  isActive?: number;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div:first-child {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }

  > div:last-child {
    width: 100%;
    margin-top: 6rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 9rem;
    row-gap: 2rem;
  }

  @media screen and (max-width: 900px) {
    > div:first-child {
      flex-direction: column;
      margin: 0 auto;
    }

    > div:last-child {
      padding: 0 5rem;
      grid-template-columns: 1fr;
    }
  }
`;

export const CustomButton = styled.button<CustomButtonProps>`
  border: none;

  width: 22rem;
  height: 18rem;

  background-color: ${props =>
    !!props.isActive
      ? props.theme.colors.tertiary
      : props.theme.colors.quaternary};
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme.colors.fontPrimary};

  svg {
    width: 3.5rem;
    height: 3.5rem;
  }

  span {
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  @media screen and (max-width: 900px) {
    margin: 0 auto;
    height: 10rem;

    & + button {
      margin-top: 1rem;
    }
  }
`;
