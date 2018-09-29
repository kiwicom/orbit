// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../defaultTokens";
import ChevronDown from "../../icons/ChevronDown";
import Heading from "../../Heading/index";
import Text from "../../Text/index";
import { getSize } from "../../Icon";
import { ICON_SIZES } from "../../Icon/consts";
import { right } from "../../utils/rtl";

import type { Props } from "./index";

const StyledCardSectionIconRight = styled(ChevronDown)`
  align-self: center;
  transition: ${({ theme }) => theme.orbit.durationFast};
`;

StyledCardSectionIconRight.defaultProps = {
  theme: defaultTokens,
};

const StyledCardSectionContent = styled.div`
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  color: ${({ theme }) => theme.orbit.colorTextPrimary};
  border-top: ${({ theme, expanded }) =>
    expanded
      ? `1px solid ${theme.orbit.paletteCloudNormal}`
      : `0px solid ${theme.orbit.paletteCloudNormal}`};
  padding-top: ${({ theme, expanded }) => expanded && `${theme.orbit.spaceMedium}`};
  transition: max-height ${({ theme }) => theme.orbit.durationFast} linear,
    padding ${({ theme }) => theme.orbit.durationFast} linear,
    border-top ${({ theme }) => theme.orbit.durationFast} linear;
  overflow: hidden;
`;

StyledCardSectionContent.defaultProps = {
  theme: defaultTokens,
};

const getMaxHeight = ({ expandable, expanded, contentHeight }) => {
  if (expandable) {
    if (expanded) {
      return `${contentHeight}px`;
    }
    return 0;
  }
  return "auto";
};

export const StyledCardSection = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.orbit.spaceLarge};
  box-sizing: border-box;
  position: relative;
  background: ${({ theme }) => theme.orbit.backgroundCard};

  ${StyledCardSectionIconRight} {
    transform: ${({ expanded }) => expanded && "rotate(-180deg)"};
  }

  ${StyledCardSectionContent} {
    max-height: ${getMaxHeight};
  }
`;

StyledCardSection.defaultProps = {
  theme: defaultTokens,
};

const StyledCardSectionHeader = styled.div`
  margin-bottom: ${({ theme, expanded }) => expanded && theme.orbit.spaceMedium};
  display: flex;
  flex-direction: row;
  transition: margin ${({ theme }) => theme.orbit.durationFast} linear;
  cursor: pointer;
  position: relative;
  min-height: ${({ expandable }) => expandable && getSize(ICON_SIZES.MEDIUM)};
`;

StyledCardSectionHeader.defaultProps = {
  theme: defaultTokens,
};

const StyledTitleAndSubtitle = styled.div`
  flex: 1;
  padding-${right}: ${({ theme }) => theme.orbit.spaceMedium};
`;

StyledTitleAndSubtitle.defaultProps = {
  theme: defaultTokens,
};

class CardSection extends React.Component<any, Props> {
  componentDidMount() {
    const { expandable } = this.props;

    if (expandable) {
      setTimeout(this.setHeight, 250); // Prevent showing children on initial render
    }
  }

  componentDidUpdate() {
    const { expandable } = this.props;

    if (expandable) {
      this.setHeight(); // Prevent showing children on initial render
    }
  }

  setHeight = () => {
    this.contentHeight = this.node?.current.clientHeight;
  };

  contentHeight: number = 0;
  node: { current: any | HTMLDivElement } = React.createRef();

  render() {
    const { title, subTitle, children, dataTest, expandable, expanded, onClick } = this.props;
    return (
      <StyledCardSection
        data-test={dataTest}
        expandable={expandable}
        expanded={expanded}
        contentHeight={this.contentHeight}
      >
        <StyledCardSectionHeader expandable={expandable} expanded={expanded} onClick={onClick}>
          <StyledTitleAndSubtitle>
            {title && (
              <Heading type="title3" element="h3">
                {title}
              </Heading>
            )}
            {subTitle && <Text>{subTitle}</Text>}
          </StyledTitleAndSubtitle>
          {expandable && <StyledCardSectionIconRight size="medium" color="secondary" />}
        </StyledCardSectionHeader>
        <StyledCardSectionContent expanded={expanded}>
          <div ref={this.node}>{children}</div>
        </StyledCardSectionContent>
      </StyledCardSection>
    );
  }
}

export default CardSection;
