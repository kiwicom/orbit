// @flow
import React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";
import { CardSectionContext } from "../index";
import Slide, { StyledSlide } from "../../../utils/Slide";
import media from "../../../utils/mediaQuery";

import type { Props, State } from "./index";

const hasPaddingTop = ({ expandable, expanded, visible }) => expanded || visible || !expandable;

export const StyledCardSectionContent = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  color: ${({ theme }) => theme.orbit.colorTextPrimary};
  border-top: ${({ theme, expanded }) =>
    expanded
      ? `1px solid ${theme.orbit.paletteCloudNormal}`
      : `0px solid ${theme.orbit.paletteCloudNormal}`};
  padding-top: ${({ theme, expandable, expanded, visible }) =>
    hasPaddingTop({ expandable, expanded, visible }) && theme.orbit.spaceMedium};
  transition: padding ${({ theme }) => theme.orbit.durationFast} linear,
    border-top ${({ theme }) => theme.orbit.durationFast} linear;
  overflow: hidden;

  ${media.desktop(css`
    padding-top: ${({ theme, expandable, expanded, visible }) =>
      hasPaddingTop({ expandable, expanded, visible }) && theme.orbit.spaceLarge};
  `)}

  ${StyledSlide} {
    max-height: ${({ expandable, visible }) => expandable && visible && "none"};
  }
`;

StyledCardSectionContent.defaultProps = {
  theme: defaultTheme,
};

const withConsumer = CardSection => ({ children, visible }: Props) => (
  <CardSectionContext.Consumer>
    {({ expandable, expanded }) => (
      <CardSection expandable={expandable} expanded={expanded} visible={visible}>
        {children}
      </CardSection>
    )}
  </CardSectionContext.Consumer>
);

class CardSectionContent extends React.Component<Props, State> {
  state = {
    contentHeight: 0,
  };

  node: { current: any | HTMLDivElement } = React.createRef();

  componentDidMount() {
    const { expandable } = this.props;
    if (expandable) {
      window.addEventListener("resize", this.setHeight);
      setTimeout(this.setHeight, 10);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { expandable } = this.props;

    if (expandable) {
      if (
        prevState.contentHeight !== this.state.contentHeight ||
        prevProps.children !== this.props.children
      ) {
        setTimeout(this.setHeight, 10);
      }

      if (prevProps.expanded !== this.props.expanded) {
        // Calculate height on expand - for dynamic components like TripSector
        this.setHeight();
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setHeight);
  }

  setHeight = () => {
    this.setState({
      contentHeight: this.node?.current?.clientHeight,
    });
  };

  render() {
    const { children, expanded, expandable, visible } = this.props;

    return (
      <StyledCardSectionContent
        expanded={expanded}
        expandable={expandable}
        visible={visible}
        contentHeight={this.state.contentHeight}
      >
        {expandable ? (
          <Slide maxHeight={this.state.contentHeight} expanded={expanded}>
            <div ref={this.node}>{children}</div>
          </Slide>
        ) : (
          <div ref={this.node}>{children}</div>
        )}
      </StyledCardSectionContent>
    );
  }
}

const DecoratedComponent = withConsumer(CardSectionContent);
DecoratedComponent.displayName = "CardSectionContent";

export default DecoratedComponent;
