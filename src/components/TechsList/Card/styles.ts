import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 6px;
  height: 8rem;
  background: ${props => props.theme.colors.primary};
  box-shadow: 0px 0px 28px -2px rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
