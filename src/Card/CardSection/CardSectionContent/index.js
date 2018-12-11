// @flow
import React from "react";
import styled from "styled-components";

import defaultTokens from "../../../defaultTokens";
import { CardSectionContext } from "../index";

import type { Props, State } from "./index";

const getMaxHeight = ({ expandable, expanded, contentHeight, visible }) => {
  if (expandable) {
    if ((expanded && contentHeight === 0) || visible) {
      return "none";
    }
    if (expanded) {
      return `${contentHeight}px`;
    }
    return 0;
  }
  return "none";
};

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
    hasPaddingTop({ expandable, expanded, visible }) && theme.orbit.spaceLarge};
  transition: max-height ${({ theme }) => theme.orbit.durationFast} linear,
    padding ${({ theme }) => theme.orbit.durationFast} linear,
    border-top ${({ theme }) => theme.orbit.durationFast} linear;
  max-height: ${getMaxHeight};
  overflow: hidden;
`;

StyledCardSectionContent.defaultProps = {
  theme: defaultTokens,
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
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setHeight);
  }

  setHeight = () => {
    this.setState({
      contentHeight: this.node?.current.clientHeight,
    });
  };

  node: { current: any | HTMLDivElement } = React.createRef();

  render() {
    const { children, expanded, expandable, visible } = this.props;

    return (
      <StyledCardSectionContent
        expanded={expanded}
        expandable={expandable}
        visible={visible}
        contentHeight={this.state.contentHeight}
      >
        <div ref={this.node}>{children}</div>
      </StyledCardSectionContent>
    );
  }
}

const DecoratedComponent = withConsumer(CardSectionContent);
DecoratedComponent.displayName = "CardSectionContent";

export default DecoratedComponent;
