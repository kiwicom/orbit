// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../defaultTokens";
import Heading from "../../Heading/index";
import NewWindow from "../../icons/NewWindow";
import ChevronRight from "../../icons/ChevronRight";
import ChevronDown from "../../icons/ChevronDown";

import type { Props, IconProps, IconRightProps } from "./index";

const StyledTileHeader = styled.div`
  display: block;
  cursor: pointer;
  position: relative;
  padding: ${({ theme }) => theme.orbit.spaceMedium}; //TODO Create token paddingTile
`;

StyledTileHeader.defaultProps = {
  theme: defaultTokens,
};

const StyledTileTitle = styled.div`
  display: flex;
  align-items: center;
`;

StyledTileTitle.defaultProps = {
  theme: defaultTokens,
};

const StyledTileIcon = styled.div`
  color: ${({ theme }) => theme.orbit.colorHeading};
  display: flex;
  align-items: center;
  margin: ${({ theme }) => `0 ${theme.orbit.spaceXSmall} 0 0`};
`;

StyledTileIcon.defaultProps = {
  theme: defaultTokens,
};

const StyledTileDescription = styled.div`
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  color: ${({ theme }) => theme.orbit.colorTextPrimary};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  margin-top: ${({ theme }) => theme.orbit.spaceXXSmall};
  margin-right: ${({ theme }) => theme.orbit.spaceXLarge};
  margin-left: ${({ theme, hasIcon, hasTitle }) => hasIcon && hasTitle && theme.orbit.spaceXLarge};
`;

StyledTileDescription.defaultProps = {
  theme: defaultTokens,
};

const Icon = ({ icon }: IconProps) => <StyledTileIcon>{icon}</StyledTileIcon>;

export const StyledIconRight = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.orbit.paletteInkLight};
  padding: ${({ theme }) => `0 ${theme.orbit.spaceMedium} 0 0`};
  transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  svg {
    transform: ${({ isExpanded }) => isExpanded && "rotate(-180deg)"};
    transition: transform ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  }
`;

StyledIconRight.defaultProps = {
  theme: defaultTokens,
};

const getIconRight = ({ external, isExpandable }: IconRightProps) => {
  if (isExpandable) {
    return <ChevronDown size="medium" />;
  }
  if (external) {
    return <NewWindow size="medium" />;
  }
  return <ChevronRight size="medium" />;
};

const IconRight = ({ external, isExpandable, isExpanded }: IconRightProps) => (
  <StyledIconRight isExpandable={isExpandable} isExpanded={isExpanded}>
    {getIconRight({ external, isExpandable })}
  </StyledIconRight>
);

const TileHeader = ({
  icon,
  title,
  description,
  external,
  onClick,
  isExpandable,
  isExpanded,
}: Props) => (
  <StyledTileHeader onClick={onClick}>
    {title && (
      <StyledTileTitle>
        {icon && <Icon icon={icon} />}
        <Heading type="title3" element="h3">
          {title}
        </Heading>
      </StyledTileTitle>
    )}
    {description && (
      <StyledTileDescription hasIcon={!!icon} hasTitle={!!title}>
        {description}
      </StyledTileDescription>
    )}
    <IconRight external={external} isExpandable={isExpandable} isExpanded={isExpanded} />
  </StyledTileHeader>
);

export default TileHeader;
