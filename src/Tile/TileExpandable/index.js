// @flow
import * as React from "react";
import styled from "styled-components";

import toggleDown from "../../utils/toggleDown/index";
import toggleUp from "../../utils/toggleUp/index";
import defaultTokens from "../../defaultTokens";

import type { Props } from "./index";

const StyledTileExpandable = styled.div`
  border-top: ${({ theme, expanded }) =>
    expanded
      ? `1px solid ${theme.orbit.paletteCloudNormal}`
      : `0px solid ${theme.orbit.paletteCloudNormal}`};
  padding: ${({ theme, expanded }) => expanded && `${theme.orbit.spaceMedium} 0`};
  margin: 0 ${({ theme }) => theme.orbit.spaceMedium};
  max-height: ${({ contentHeight, expanded, initialExpanded }) =>
    !initialExpanded && (expanded ? `${contentHeight}px` : "0")};
  transition: ${({ initialExpanded, theme }) =>
    !initialExpanded &&
    `
      max-height ${theme.orbit.durationFast} linear,
      padding ${theme.orbit.durationFast} linear,
      border-top ${theme.orbit.durationFast} linear
    `};
  overflow: hidden;
  animation: ${({ theme, contentHeight, expanded, initialExpanded }) =>
    !initialExpanded &&
    (expanded
      ? `${theme.orbit.durationFast} ${toggleDown(contentHeight)} linear`
      : `${theme.orbit.durationFast} ${toggleUp(contentHeight)} linear`)};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  color: ${({ theme }) => theme.orbit.colorTextPrimary};
`;

StyledTileExpandable.defaultProps = {
  theme: defaultTokens,
};

class TileExpandable extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.contentHeight = 0;
    this.node = React.createRef();
  }

  componentDidMount() {
    setTimeout(this.setHeight, 250); // Prevent showing children on initial render
  }

  setHeight = () => {
    this.contentHeight = this.node.current.clientHeight;
  };

  contentHeight: number;
  node: { current: any | HTMLDivElement };

  render() {
    const { expanded, children, initialExpanded } = this.props;
    return (
      <StyledTileExpandable
        expanded={expanded}
        contentHeight={this.contentHeight}
        initialExpanded={initialExpanded}
      >
        <div ref={this.node}>{children}</div>
      </StyledTileExpandable>
    );
  }
}

export default TileExpandable;
