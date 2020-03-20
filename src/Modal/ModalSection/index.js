// @flow
import React, { useContext, useEffect } from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import media from "../../utils/mediaQuery";
import { StyledModalFooter } from "../ModalFooter";
import { ModalContext } from "../ModalContext";
import useModalContextFunctions from "../helpers/useModalContextFunctions";

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
    border-top-left-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && "12px"}; // TODO: create token
    border-top-right-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && "12px"}; // TODO: create token
    margin-top: ${({ suppressed, theme, closable }) =>
      suppressed && closable && theme.orbit.spaceLarge};
  }

  &:last-of-type {
    border-bottom: ${({ suppressed, theme }) =>
      suppressed ? `1px solid ${theme.orbit.paletteCloudNormal}` : "0"};
    border-bottom-left-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && "12px"}; // TODO: create token
    border-bottom-right-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && "12px"}; // TODO: create token
    & ~ ${StyledModalFooter} {
      margin-top: ${({ theme, suppressed }) => suppressed && theme.orbit.spaceMedium};
    }
    &:not(:last-child) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  ${media.largeMobile(css`
    padding: ${({ theme }) => theme.orbit.spaceXXLarge};

    &:first-of-type {
      margin-top: ${({ suppressed, theme, closable }) =>
        suppressed && closable && theme.orbit.spaceXXLarge};
      border-top-left-radius: ${({ isMobileFullPage }) =>
        !isMobileFullPage && "9px"}; // TODO: create token
      border-top-right-radius: ${({ isMobileFullPage }) =>
        !isMobileFullPage && "9px"}; // TODO: create token
    }

    &:last-of-type {
      border-bottom-left-radius: ${({ isMobileFullPage }) =>
        !isMobileFullPage && "9px"}; // TODO: create token
      border-bottom-right-radius: ${({ isMobileFullPage }) =>
        !isMobileFullPage && "9px"}; // TODO: create token
      & ~ ${StyledModalFooter} {
        padding-top: ${({ suppressed }) => !suppressed && "0"};
        margin-top: 0;
      }
    }
  `)};
`;

StyledModalSection.defaultProps = {
  theme: defaultTheme,
};

const ModalSection = ({ children, suppressed, dataTest }: Props) => {
  const { removeHasModalSection, setHasModalSection, isMobileFullPage, closable } = useContext(
    ModalContext,
  );

  useModalContextFunctions();

  /*
    Run on every re-render to prevent setting hasModalSection to false when there's more sections
   */
  useEffect(() => {
    if (setHasModalSection) setHasModalSection();
  });

  useEffect(() => {
    return () => {
      if (removeHasModalSection) removeHasModalSection();
    };
  }, [removeHasModalSection]);

  return (
    <StyledModalSection
      suppressed={suppressed}
      data-test={dataTest}
      closable={closable}
      isMobileFullPage={isMobileFullPage}
    >
      {children}
    </StyledModalSection>
  );
};

export default ModalSection;
