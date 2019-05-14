// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import Slide from "../../utils/Slide";
import defaultTheme from "../../defaultTheme";

import type { Props, State } from "./index";

const StyledTileExpandable = styled.div`
  border-top: ${({ theme, expanded }) =>
    expanded
      ? `1px solid ${theme.orbit.paletteCloudNormal}`
      : `0px solid ${theme.orbit.paletteCloudNormal}`};
  padding: ${({ theme, expanded }) => expanded && `${theme.orbit.spaceMedium} 0`};
  margin: 0 ${({ theme }) => theme.orbit.spaceMedium};
  ${({ initialExpanded, theme }) =>
    !initialExpanded &&
    css`
      transition: max-height ${theme.orbit.durationFast} ease-in-out,
        padding ${theme.orbit.durationFast} ease-in-out,
        border-top ${theme.orbit.durationFast} ease-in-out;
    `};
  overflow: hidden;
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  color: ${({ theme }) => theme.orbit.colorTextPrimary};
`;

StyledTileExpandable.defaultProps = {
  theme: defaultTheme,
};

class TileExpandable extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.node = React.createRef();
    this.state = {
      contentHeight: 0,
    };
  }

  componentDidMount() {
    this.timeout = setTimeout(this.setHeight, 250); // Prevent showing children on initial render
    window.addEventListener("resize", this.setHeight);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.children !== this.props.children) {
      this.setHeight();
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    window.removeEventListener("resize", this.setHeight);
  }

  setHeight = () => {
    const contentHeight = this.node?.current.clientHeight;
    this.setState({ contentHeight });
  };

  timeout: TimeoutID;

  node: { current: any | HTMLDivElement };

  render() {
    const { expanded, children, initialExpanded } = this.props;
    return (
      <StyledTileExpandable
        expanded={expanded}
        contentHeight={this.state.contentHeight}
        initialExpanded={initialExpanded}
      >
        <Slide maxHeight={this.state.contentHeight} expanded={expanded}>
          <div ref={this.node}>{children}</div>
        </Slide>
      </StyledTileExpandable>
    );
  }
}

export default TileExpandable;
