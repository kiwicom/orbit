// @flow
import React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";
import { rtlSpacing } from "../../../utils/rtl/index";
import Stack from "../../../Stack/index";
import Heading from "../../../Heading/index";
import ChevronDown from "../../../icons/ChevronDown";
import NewWindow from "../../../icons/NewWindow";
import ChevronRight from "../../../icons/ChevronRight";
import transition from "../../../utils/transition";

import type { Props } from ".";

const StyledTileHeader = styled.div`
  display: block;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  padding: ${({ theme }) => theme.orbit.spaceMedium}; //TODO Create token paddingTile
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightTextNormal};
  transition: background-color 0.15s ease-in-out;
  :focus {
    outline: none;
  }
`;

StyledTileHeader.defaultProps = {
  theme: defaultTheme,
};

const StyledTileIcon = styled.div`
  color: ${({ theme }) => theme.orbit.colorIconPrimary};
  flex-shrink: 0;
  align-items: center;
  align-self: flex-start;
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceXSmall} 0 0`)};
`;

StyledTileIcon.defaultProps = {
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

const StyledTileDescription = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  color: ${({ theme }) => theme.orbit.colorTextPrimary};
  line-height: ${({ theme }) => theme.orbit.lineHeightTextNormal};
  -webkit-text-size-adjust: 100%;
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

const IconRight = ({ external, expandable, className }) => {
  if (expandable) {
    return <ChevronDown className={className} />;
  }
  if (external) {
    return <NewWindow className={className} />;
  }
  return <ChevronRight className={className} reverseOnRtl />;
};

export const StyledIconRight = styled(IconRight)`
  color: ${({ theme }) => theme.orbit.colorIconSecondary};
  margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceMedium}`)};
  transition: ${transition(["color", "transform"], "fast", "ease-in-out")};
  ${({ expanded }) =>
    expanded &&
    css`
      transform: rotate(-180deg);
    `};
`;

StyledIconRight.defaultProps = {
  theme: defaultTheme,
};

const TileHeader = ({
  icon,
  title,
  description,
  expandable,
  expanded,
  external,
  onClick,
  header,
  role,
  ariaExpanded,
  ariaControls,
  id,
  tabIndex,
  onKeyDown,
}: Props) => (
  <StyledTileHeader
    onClick={onClick}
    onKeyDown={onKeyDown}
    role={role}
    aria-expanded={ariaExpanded}
    aria-controls={ariaControls}
    id={id}
    tabIndex={tabIndex}
  >
    <Stack align="center" justify="between" shrink spacing="none">
      {icon && <StyledTileIcon>{icon}</StyledTileIcon>}
      {header ||
        ((title || description) && (
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
        ))}
      <StyledIconRight external={external} expandable={expandable} expanded={expanded} />
    </Stack>
  </StyledTileHeader>
);

export default TileHeader;
