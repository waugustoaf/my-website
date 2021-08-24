import styled from 'styled-components';

export const Container = styled.a.attrs({ className: 'icon-button' })`
  font-size: 1.875rem;
  transition: filter 0.2s;

  & + .icon-button {
    margin-left: 1.5rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
