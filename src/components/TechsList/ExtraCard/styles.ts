import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 6px;
  height: 8rem;
  padding: 24px;
  background: ${props => props.theme.colors.primary};
  box-shadow: 0px 0px 28px -2px rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 1rem;
    text-align: center;

    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
