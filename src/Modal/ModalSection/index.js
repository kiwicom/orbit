// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../defaultTokens";
import media from "../../utils/media";
import { StyledModalFooter } from "../ModalFooter";

import type { Props } from "./index";

export const StyledModalSection = styled.section`
  width: 100%;
  padding: ${({ theme }) => `${theme.orbit.spaceLarge} ${theme.orbit.spaceMedium}`};
  background-color: ${({ theme, suppressed }) =>
    suppressed ? theme.orbit.paletteCloudLight : theme.orbit.paletteWhite};
  border-bottom: 1px solid ${({ theme }) => theme.orbit.paletteCloudNormal};
  box-sizing: border-box;

  &:first-of-type {
    border-top: ${({ suppressed, theme }) =>
      suppressed && `1px solid ${theme.orbit.paletteCloudNormal}`};
    border-top-left-radius: 9px; // TODO: create token
    border-top-right-radius: 9px; // TODO: create token
    margin-top: ${({ suppressed, theme }) => suppressed && theme.orbit.spaceLarge};
  }

  &:last-of-type {
    border-bottom: ${({ suppressed, theme }) =>
      suppressed ? `1px solid ${theme.orbit.paletteCloudNormal}` : "0"};
    border-bottom-left-radius: 9px; // TODO: create token
    border-bottom-right-radius: 9px; // TODO: create token
    & ~ ${StyledModalFooter} {
      margin-top: ${({ theme, suppressed }) => suppressed && theme.orbit.spaceMedium};
    }
    &:not(:last-child) {
      border-radius: 0;
    }
  }

  ${media.desktop`
    padding: ${({ theme }) => theme.orbit.spaceXXLarge};
    
    &:first-of-type {
      margin-top: ${({ suppressed, theme }) => suppressed && theme.orbit.spaceXXLarge};
    }
    &:last-of-type {
      & ~ ${StyledModalFooter} {
        padding-top: ${({ suppressed }) => !suppressed && "0"};
        margin-top: 0;
      }
    }
  `};
`;

StyledModalSection.defaultProps = {
  theme: defaultTokens,
};

const ModalSection = (props: Props) => {
  const { suppressed, children, dataTest } = props;
  return (
    <StyledModalSection suppressed={suppressed} data-test={dataTest}>
      {children}
    </StyledModalSection>
  );
};

export default ModalSection;
