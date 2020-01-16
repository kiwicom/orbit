// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";
import Heading from "../../../Heading";
import Stack from "../../../Stack";
import NewWindow from "../../../icons/NewWindow";
import ChevronRight from "../../../icons/ChevronRight";
import ChevronDown from "../../../icons/ChevronDown";
import { rtlSpacing } from "../../../utils/rtl";

import type { Props, IconRightProps } from "./index";

const StyledTileHeader = styled.div`
  display: block;
  cursor: pointer;
  position: relative;
  padding: ${({ theme }) => theme.orbit.spaceMedium}; //TODO Create token paddingTile
`;

StyledTileHeader.defaultProps = {
  theme: defaultTheme,
};

const StyledTileTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

StyledTileTitle.defaultProps = {
  theme: defaultTheme,
};

const StyledTileIcon = styled.div`
  color: ${({ theme }) => theme.orbit.colorHeading};
  display: flex;
  flex-shrink: 0;
  align-items: center;
  align-self: flex-start;
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceXSmall} 0 0`)};
`;

StyledTileIcon.defaultProps = {
  theme: defaultTheme,
};

const StyledTileDescription = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  color: ${({ theme }) => theme.orbit.colorTextPrimary};
  line-height: ${({ theme }) => theme.orbit.lineHeightTextNormal};
  width: 100%;
  ${({ hasTitle, theme }) =>
    hasTitle &&
    css`
      margin-top: ${theme.orbit.spaceXXSmall};
    `};
`;

StyledTileDescription.defaultProps = {
  theme: defaultTheme,
};

export const StyledIconRight = styled.div`
  color: ${({ theme }) => theme.orbit.paletteInkLight};
  padding: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceMedium}`)};
  transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  svg {
    ${({ isExpanded }) =>
      isExpanded &&
      css`
        transform: rotate(-180deg);
      `};
    transition: transform ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  }
`;

StyledIconRight.defaultProps = {
  theme: defaultTheme,
};

const getIconRight = ({ external, isExpandable }: IconRightProps) => {
  if (isExpandable) {
    return <ChevronDown size="medium" />;
  }
  if (external) {
    return <NewWindow size="medium" />;
  }
  return <ChevronRight size="medium" reverseOnRtl />;
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
    <Stack align="center" shrink spacing="none">
      {icon && <StyledTileIcon>{icon}</StyledTileIcon>}
      <Stack spacing="none" direction="column" shrink>
        {title && (
          <StyledTileTitle>
            <Heading type="title3" element="h3">
              {title}
            </Heading>
          </StyledTileTitle>
        )}
        {description && (
          <StyledTileDescription hasTitle={!!title}>{description}</StyledTileDescription>
        )}
      </Stack>
      <IconRight external={external} isExpandable={isExpandable} isExpanded={isExpanded} />
    </Stack>
  </StyledTileHeader>
);

export default TileHeader;
