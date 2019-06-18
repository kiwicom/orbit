// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import ChevronDown from "../../icons/ChevronDown";
import { getSize } from "../../Icon";
import { ICON_SIZES } from "../../Icon/consts";
import media from "../../utils/mediaQuery";

import type { ContextType, Props } from "./index";

const StyledCardSectionIconRight = styled(ChevronDown)`
  align-self: center;
  transition: ${({ theme }) => theme.orbit.durationFast};
`;

StyledCardSectionIconRight.defaultProps = {
  theme: defaultTheme,
};

const StyledCardSectionContent = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  color: ${({ theme }) => theme.orbit.colorTextPrimary};
  border-top: ${({ theme, expanded }) =>
    expanded
      ? `1px solid ${theme.orbit.paletteCloudNormal}`
      : `0px solid ${theme.orbit.paletteCloudNormal}`};
  padding-top: ${({ theme, expanded }) => expanded && `${theme.orbit.spaceMedium}`};
  overflow: hidden;
`;

StyledCardSectionContent.defaultProps = {
  theme: defaultTheme,
};

export const StyledCardSection = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.orbit.spaceMedium};
  box-sizing: border-box;
  position: relative;
  background: ${({ theme }) => theme.orbit.backgroundCard};

  ${media.desktop(css`
    padding: ${({ theme }) => theme.orbit.spaceLarge};
  `)}
`;

StyledCardSection.defaultProps = {
  theme: defaultTheme,
};

const StyledCardSectionHeader = styled.div`
  margin-bottom: ${({ theme, expanded }) => expanded && theme.orbit.spaceMedium};
  display: flex;
  flex-direction: row;
  cursor: pointer;
  position: relative;
  min-height: ${({ expandable }) => expandable && getSize(ICON_SIZES.MEDIUM)};
`;

StyledCardSectionHeader.defaultProps = {
  theme: defaultTheme,
};

export const CardSectionContext: React.Context<ContextType> = React.createContext({
  expandable: false,
  expanded: false,
  handleToggleSection: () => {},
  onKeyDownHandler: () => {},
});

class CardSection extends React.Component<any, Props> {
  componentDidMount() {
    const { handleToggleSection, initialExpanded, setInitialExpandedSection } = this.props;

    if (initialExpanded) {
      handleToggleSection();
      setInitialExpandedSection();
    }
  }

  injectCallbackAndToggleSection = () => {
    const { handleToggleSection, onClose, onExpand, expanded } = this.props;
    handleToggleSection(); // First do toggle

    if (expanded && onClose) {
      // If is expanded -> action is closing
      onClose();
    }
    if (!expanded && onExpand) {
      // if is closed > action is expanding
      onExpand();
    }
  };

  handleKeyDown = (ev: SyntheticKeyboardEvent<HTMLDivElement>) => {
    if (ev.keyCode === 13 || ev.keyCode === 32) {
      ev.preventDefault();

      this.injectCallbackAndToggleSection();
    }
  };

  render() {
    const { children, dataTest, expandable, expanded } = this.props;
    return (
      <StyledCardSection data-test={dataTest} expandable={expandable} expanded={expanded}>
        <CardSectionContext.Provider
          value={{
            expandable,
            expanded,
            handleToggleSection: this.injectCallbackAndToggleSection,
            onKeyDownHandler: this.handleKeyDown,
          }}
        >
          {children}
        </CardSectionContext.Provider>
      </StyledCardSection>
    );
  }
}

export default CardSection;

export { default as CardSectionHeader } from "./CardSectionHeader";
export { default as CardSectionContent } from "./CardSectionContent";
