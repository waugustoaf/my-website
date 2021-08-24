import styled, { css } from 'styled-components';

interface HyperLinkProps {
  isActive: number;
}

export const Container = styled.div<HyperLinkProps>`
  position: relative;

  display: flex;
  flex-direction: column;

  ${props =>
    props.isActive &&
    css`
      &::after {
        content: '';
        position: absolute;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        left: 50%;
        transform: translateX(-50%);
        top: calc(100% + 6px);
        background-color: ${props => props.theme.colors.tertiary};
      }
    `}
`;

export const HyperLink = styled.a<HyperLinkProps>`
  font-size: 1.5rem;
  color: ${props =>
    !!props.isActive
      ? props.theme.colors.fontPrimary
      : props.theme.colors.fontSecondary};
  font-weight: bold;
`;
