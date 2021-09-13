import { keyframes } from 'styled-components';

export const fromTop = keyframes`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const fromBottom = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const rotate3d = keyframes`
  from {
    transform: rotate3d(1, 0, 0, 90deg);
  }
  to {
    transform: rotate3d(1, 0, 0, 0deg);
  }
`;

export const fromRight = keyframes`
  from {
    transform: translateX(200px);
  }
  to {
    transform: translateX(0px);
  }
`;

export const infinityDown = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(4px);
  }
`;

export const infinityZoom = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export const opacityFromZero = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const comeFromZero = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;