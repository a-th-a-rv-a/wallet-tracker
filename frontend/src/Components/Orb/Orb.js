import React from "react";
import styled, { keyframes, css } from "styled-components";
import { useWindowSize } from "../../utils/useWindowSize";

function Orb() {
  const { width, height } = useWindowSize();

  const moveOrb = (width, height) => keyframes`
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(${width}px, ${height / 1.5}px);
        }
        100% {
            transform: translate(0, 0);
        }
    `;

  const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -35vh;
    margin-top: -35vh;
    background: linear-gradient(180deg, #f55592 0%, #f2994a 100%);
    filter: blur(300px);
    ${({ width, height }) =>
      width &&
      height &&
      css`
        animation: ${moveOrb(width, height)} 15s alternate linear infinite;
      `}
  `;

  return <OrbStyled width={width} height={height} />;
}

export default Orb;
