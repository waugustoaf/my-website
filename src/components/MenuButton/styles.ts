import styled, { css } from 'styled-components';

interface ContainerProps {
  isActive: number;
}

export const Container = styled.button<ContainerProps>`
  margin-top: 1.5rem;
  border-radius: 6px;
  width: 100%;
  padding: 1rem 0;
  border: ${props => props.theme.colors.fontSecondary} 1px solid;

  color: ${props => props.theme.colors.fontSecondary};
  background: ${props =>
    props.isActive
      ? props.theme.colors.quaternary
      : props.theme.colors.secondary};

  svg {
    color: ${props => props.theme.colors.fontSecondary};
    font-size: 1.3rem;
    margin-right: 1rem;
  }

  ${props =>
    props.isActive &&
    css`
      border: none;
      color: ${props => props.theme.colors.fontPrimary};

      svg {
        color: ${props => props.theme.colors.fontPrimary};
      }
    `}
`;

export const HyperLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
`;
