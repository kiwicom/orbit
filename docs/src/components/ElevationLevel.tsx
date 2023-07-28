import React from "react";
import styled, { css } from "styled-components";

import theme from "../theme";

interface LevelDivProps {
  backgroundColor: string;
  border: string;
  boxShadow: string;
}

export const LevelDiv = styled.div<LevelDivProps>`
  ${({ boxShadow, backgroundColor, border }) => css`
    height: 40px;
    width: 40px;
    position: relative;
    left: 25%;
    background-color: ${backgroundColor};
    border: ${border};
    box-shadow: ${boxShadow};
  `}
`;

interface ElevationLevelProps {
  level: 1 | 2 | 3 | 3.5 | 4 | 4.5 | 5 | 5.5 | 6;
}

export default ({ level }: ElevationLevelProps) => {
  let backgroundColor = theme.orbit.paletteWhiteNormal;
  let border = "none";
  let boxShadow = "none";
  switch (level) {
    case 1:
      backgroundColor = theme.orbit.paletteCloudLight;
      break;
    case 2:
      border = `${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard} ${theme.orbit.borderColorCard}`;
      break;
    case 3:
      boxShadow = theme.orbit.boxShadowAction;
      break;
    case 3.5:
      boxShadow = theme.orbit.boxShadowActionActive;
      break;
    case 4:
      boxShadow = theme.orbit.boxShadowFixed;
      break;
    case 4.5:
      boxShadow = theme.orbit.boxShadowFixedReverse;
      break;
    case 5:
      boxShadow = theme.orbit.boxShadowRaised;
      break;
    case 5.5:
      boxShadow = theme.orbit.boxShadowRaisedReverse;
      break;
    case 6:
      boxShadow = theme.orbit.boxShadowOverlay;
      break;
    default:
      break;
  }
  return <LevelDiv backgroundColor={backgroundColor} border={border} boxShadow={boxShadow} />;
};
