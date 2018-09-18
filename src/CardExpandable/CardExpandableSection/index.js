// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../defaultTokens";
import toggleDown from "../../utils/toggleDown";
import toggleUp from "../../utils/toggleUp";
import CardExpandableSectionHeader, {
  StyledCardExpandableSectionHeader,
} from "./CardExpandableSectionHeader";
import { StyledCardExpandableSectionContent } from "./CardExpandableSectionContent";

import type { Props, State } from "./index";

const StyledCardExpandableSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  border-radius: ${({ theme, toggle }) => toggle && theme.orbit.borderRadiusNormal};
  border-top: ${({ theme, toggle }) => toggle && `solid 1px ${theme.orbit.paletteCloudNormal}`};
  border-right: solid 1px ${({ theme }) => theme.orbit.paletteCloudNormal};
  border-bottom: solid 1px ${({ theme }) => theme.orbit.paletteCloudNormal};
  border-left: solid 1px ${({ theme }) => theme.orbit.paletteCloudNormal};
  box-shadow: ${({ toggle }) =>
    toggle && `0 4px 12px 0 rgba(23, 27, 30, 0.1)`}; //TODO Create token boxShadowCard
  transition: margin ${({ theme }) => theme.orbit.durationFast} ease-in-out,
    border-radius ${({ theme }) => theme.orbit.durationFast} ease-in-out,
    box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  margin: ${({ theme, toggle }) => toggle && `${theme.orbit.spaceXSmall} 0`};
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;

  &.prev {
    border-bottom-left-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    border-bottom-right-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  }

  &.next {
    border-top: ${({ theme }) => `solid 1px ${theme.orbit.paletteCloudNormal}`};
    border-top-left-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    border-top-right-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  }

  &:first-child {
    margin: ${({ theme, toggle }) => toggle && `${theme.orbit.spaceXSmall} 0`};
  }

  &:last-child {
    margin: ${({ theme, toggle }) => toggle && `${theme.orbit.spaceXSmall} 0 0`};
    border-bottom-left-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    border-bottom-right-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  }

  &:hover {
    ${StyledCardExpandableSectionHeader} {
    }
  }

  ${StyledCardExpandableSectionContent} {
    border-top: ${({ theme, toggle }) =>
      toggle
        ? `1px solid ${theme.orbit.paletteCloudNormal}`
        : `0px solid ${theme.orbit.paletteCloudNormal}`};
    padding: ${({ theme, toggle }) => toggle && `${theme.orbit.spaceMedium} 0`};
    margin: 0 ${({ theme }) => theme.orbit.spaceMedium};
    max-height: ${({ toggle, contentHeight }) => (toggle ? `${contentHeight}px` : "0")};
    animation: ${({ theme, toggle, contentHeight }) =>
      toggle
        ? `${theme.orbit.durationFast} ${toggleDown(contentHeight)} linear`
        : `${theme.orbit.durationFast} ${toggleUp(contentHeight)} linear`};
    transition: max-height ${({ theme }) => theme.orbit.durationFast} linear,
      padding ${({ theme }) => theme.orbit.durationFast} linear,
      border-top ${({ theme }) => theme.orbit.durationFast} linear;
  }
`;

StyledCardExpandableSection.defaultProps = {
  theme: defaultTokens,
};

class CardExpandableSection extends React.PureComponent<Props, State> {
  state = {
    toggle: this.props.shown ? this.props.shown : false,
  };

  componentDidMount() {
    setTimeout(() => this.setHeight(), 250); // Timeout to prevent initial animation from start
  }

  setHeight() {
    const { node } = this;
    if (node instanceof HTMLElement) {
      const element = Array.from(node.childNodes).find((item, index) => index === 1 && item);
      if (element) {
        this.contentHeight = Object.values(element.childNodes).reduce(
          (acc, child) => child instanceof HTMLElement && acc + child.offsetHeight,
          0,
        );
      }
    }
  }

  handleClick = () => {
    const previousElement = this.node.previousSibling;
    const nextElement = this.node.nextSibling;

    if (previousElement) {
      previousElement.classList.toggle("prev");
    }
    if (nextElement) {
      nextElement.classList.toggle("next");
    }
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  contentHeight = 0;
  node: ?HTMLElement;

  render() {
    const { children, shown } = this.props;
    const { contentHeight } = this;
    return (
      <StyledCardExpandableSection
        contentHeight={contentHeight}
        shown={shown}
        prev={this.state.prev}
        next={this.state.next}
        toggle={this.state.toggle}
        innerRef={node => {
          this.node = node;
        }}
      >
        {React.Children.map(
          children,
          item =>
            item.type.name === CardExpandableSectionHeader.name ? (
              <item.type {...item.props} onClick={this.handleClick} toggle={this.state.toggle} />
            ) : (
              item
            ),
        )}
      </StyledCardExpandableSection>
    );
  }
}

export default CardExpandableSection;
