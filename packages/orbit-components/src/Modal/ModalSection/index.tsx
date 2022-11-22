import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import media from "../../utils/mediaQuery";
import { StyledModalFooter } from "../ModalFooter";
import { ModalContext } from "../ModalContext";
import useModalContextFunctions from "../helpers/useModalContextFunctions";
import type { Props } from "./types";

export const StyledModalSection = styled.section<{
  suppressed?: boolean;
  closable?: boolean;
  isMobileFullPage?: boolean;
}>`
  ${({ theme, suppressed, closable, isMobileFullPage }) => css`
    width: 100%;
    padding: ${`${theme.orbit.spaceLarge} ${theme.orbit.spaceMedium}`};
    background-color: ${suppressed ? theme.orbit.paletteCloudLight : theme.orbit.paletteWhite};
    border-bottom: 1px solid ${theme.orbit.paletteCloudNormal};
    box-sizing: border-box;

    &:first-of-type {
      border-top: ${suppressed && `1px solid ${theme.orbit.paletteCloudNormal}`};
      border-top-left-radius: ${!isMobileFullPage && "12px"};
      border-top-right-radius: ${!isMobileFullPage && "12px"};
      margin-top: ${suppressed && closable && theme.orbit.spaceLarge};
    }

    &:last-of-type {
      border-bottom: ${suppressed ? `1px solid ${theme.orbit.paletteCloudNormal}` : "0"};
      border-bottom-left-radius: ${!isMobileFullPage && "12px"};
      border-bottom-right-radius: ${!isMobileFullPage && "12px"};
      & ~ ${StyledModalFooter} {
        margin-top: ${suppressed && theme.orbit.spaceMedium};
      }
      &:not(:last-child) {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    ${media.largeMobile(css`
      padding: ${theme.orbit.spaceXLarge};

      &:first-of-type {
        margin-top: ${((suppressed && closable) || suppressed) && theme.orbit.spaceXXLarge};
        border-top-left-radius: ${!isMobileFullPage && "9px"};
        border-top-right-radius: ${!isMobileFullPage && "9px"};
      }

      &:last-of-type {
        border-bottom-left-radius: ${!isMobileFullPage && "9px"};
        border-bottom-right-radius: ${!isMobileFullPage && "9px"};
        & ~ ${StyledModalFooter} {
          padding-top: ${!suppressed && "0"};
          margin-top: 0;
        }
      }
    `)};
  `}
`;

StyledModalSection.defaultProps = {
  theme: defaultTheme,
};

const ModalSection = ({ children, suppressed, dataTest }: Props) => {
  const {
    removeHasModalSection,
    setHasModalSection,
    isMobileFullPage,
    closable,
  } = React.useContext(ModalContext);

  useModalContextFunctions();

  /*
    Run on every re-render to prevent setting hasModalSection to false when there's more sections
   */
  React.useEffect(() => {
    if (setHasModalSection) setHasModalSection();
  });

  React.useEffect(() => {
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
