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
  level: "suppressed" | "flat" | 1 | 2 | 3 | "3Reverse" | 4 | "fixed" | "fixedReverse";
}

export default ({ level }: ElevationLevelProps) => {
  let backgroundColor = theme.orbit.paletteWhite;
  let border = "none";
  let boxShadow = "none";
  switch (level) {
    case "suppressed":
      backgroundColor = theme.orbit.paletteCloudLight;
      break;
    case "flat":
      border = `${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard} ${theme.orbit.borderColorCard}`;
      break;
    case 1:
      boxShadow = theme.orbit.elevationLevel1BoxShadow;
      break;
    case 2:
      boxShadow = theme.orbit.elevationLevel2BoxShadow;
      break;
    case 3:
      boxShadow = theme.orbit.elevationLevel3BoxShadow;
      break;
    case 4:
      boxShadow = theme.orbit.elevationLevel4BoxShadow;
      break;
    case "fixed":
      boxShadow = theme.orbit.elevationFixedBoxShadow;
      break;
    case "fixedReverse":
      boxShadow = theme.orbit.elevationFixedReverseBoxShadow;
      break;
    default:
      break;
  }
  return <LevelDiv backgroundColor={backgroundColor} border={border} boxShadow={boxShadow} />;
};
