import React from "react";
import styled from "styled-components";
import theme from "../theme";

export const LevelDiv = styled.div`
  height: 40px;
  width: 40px;
  position: relative;
  left: 25%;
  background-color: ${props => props.backgroundColor};
  border: ${props => props.border};
  box-shadow: ${props => props.boxShadow};
`;

export default ({ level }) => {
  let backgroundColor = theme.orbit.paletteWhite;
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
