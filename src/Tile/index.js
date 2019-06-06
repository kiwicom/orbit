// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import TileHeader, { StyledIconRight } from "./TileHeader";
import TileExpandable from "./TileExpandable";
import KEY_CODE_MAP from "../common/keyMaps";

import type { Props, State } from "./index";

export const StyledTile = styled(({ theme, icon, title, external, ...props }) => {
  const Component = props.href ? "a" : "div";
  return <Component {...props}>{props.children}</Component>;
})`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  text-decoration: none;
  background: ${({ theme }) => theme.orbit.paletteWhite}; //TODO Create token backgroundColorTile
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border: solid 1px ${({ theme }) => theme.orbit.paletteCloudNormal}; //TODO Create token borderWidthTile, borderColorTile
  box-shadow: 0 2px 4px 0 rgba(23, 27, 30, 0.1); //TODO Create token boxShadowTile
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  &:hover,
  &:focus {
    outline: 0;
    box-shadow: 0 4px 12px 0 rgba(23, 27, 30, 0.1); //TODO Create token boxShadowTileHover
  }

  &:hover ${StyledIconRight} {
    color: ${({ theme }) => theme.orbit.paletteInkLightHover};
  }
`;

StyledTile.defaultProps = {
  theme: defaultTheme,
};

class Tile extends React.PureComponent<Props, State> {
  state = {
    expanded: false,
    initialExpanded: false,
  };

  componentDidMount() {
    const { expanded } = this.props;
    this.setExpanded({ expanded, initialExpanded: expanded });
  }

  setExpanded = ({ expanded, initialExpanded }: State) => {
    this.setState({ expanded, initialExpanded });
  };

  isExpandable = () => {
    const { href, children } = this.props;
    return !!(!href && children); // Tile is expandable if - not href && children are passed
  };

  handleClick = (ev: SyntheticEvent<HTMLDivElement>) => {
    const { onClick } = this.props;
    if (this.isExpandable()) {
      this.setExpanded({ expanded: !this.state.expanded, initialExpanded: false });
    }
    if (onClick) {
      onClick(ev);
    }
  };

  handleKeyDown = (ev: SyntheticKeyboardEvent<HTMLElement>) => {
    const { onClick } = this.props;
    if (onClick) {
      if (ev.keyCode === KEY_CODE_MAP.ENTER) {
        onClick(ev);
      } else if (ev.keyCode === KEY_CODE_MAP.SPACE) {
        ev.preventDefault();
        onClick(ev);
      }
    }
  };

  render() {
    const { href, external, icon, title, description, children, dataTest } = this.props;
    const isExpandable = this.isExpandable();
    const isExpanded = this.state.expanded;
    return (
      <StyledTile
        target={!isExpandable && external ? "_blank" : undefined}
        rel={!isExpandable && external ? "noopener noreferrer" : undefined}
        href={!isExpandable ? href : undefined}
        data-test={dataTest}
        onKeyDown={this.handleKeyDown}
        tabIndex={href ? undefined : "0"}
        role={href ? undefined : "button"}
      >
        <TileHeader
          icon={icon}
          title={title}
          description={description}
          external={external}
          onClick={this.handleClick}
          isExpandable={isExpandable}
          isExpanded={isExpanded}
        />
        {isExpandable && children && (
          <TileExpandable expanded={isExpanded} initialExpanded={this.state.initialExpanded}>
            {children}
          </TileExpandable>
        )}
      </StyledTile>
    );
  }
}

export default Tile;
