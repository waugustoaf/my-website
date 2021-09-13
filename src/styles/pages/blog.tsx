import styled from "styled-components";
import { comeFromZero } from "../keyframes";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  > hgroup {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 4rem;
      animation: ${comeFromZero} 0.8s ease-in-out alternate;
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 2rem 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;