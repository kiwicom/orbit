import * as React from "react";
import styled, { css } from "styled-components";

import type * as Common from "../../../common/types";
import defaultTheme from "../../../defaultTheme";
import { rtlSpacing } from "../../../utils/rtl";
import Stack from "../../../Stack";
import Heading from "../../../Heading";
import ChevronDown from "../../../icons/ChevronDown";
import NewWindow from "../../../icons/NewWindow";
import ChevronRight from "../../../icons/ChevronRight";
import transition from "../../../utils/transition";
import mq from "../../../utils/mediaQuery";

interface Props {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  expandable?: boolean;
  expanded?: boolean;
  external?: boolean;
  onClick?: Common.Event<
    React.SyntheticEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
  >;
  onKeyDown?: Common.Event<React.KeyboardEvent<HTMLDivElement>>;
  header?: React.ReactNode;
  role?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  id?: string;
  tabIndex?: string | number;
  noHeaderIcon?: boolean;
}

const StyledTileHeader = styled.div`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
    padding: ${theme.orbit.spaceMedium};
    font-size: ${theme.orbit.fontSizeTextNormal};
    line-height: ${theme.orbit.lineHeightTextNormal};
    transition: ${transition(["background-color"], "fast", "ease-in-out")};

    ${mq.largeMobile(css`
      padding: ${theme.orbit.spaceLarge};
    `)}
  `}
`;

StyledTileHeader.defaultProps = {
  theme: defaultTheme,
};

const StyledTileIcon = styled.div`
  ${({ theme }) => css`
    color: ${theme.orbit.colorIconPrimary};
    flex-shrink: 0;
    align-items: center;
    align-self: flex-start;
    margin: ${rtlSpacing(`0 ${theme.orbit.spaceXSmall} 0 0`)};
  `}
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

const StyledTileDescription = styled.div<{ hasTitle?: boolean }>`
  ${({ theme, hasTitle }) => css`
    font-family: ${theme.orbit.fontFamily};
    font-size: ${theme.orbit.fontSizeTextNormal};
    color: ${theme.orbit.colorTextPrimary};
    line-height: ${theme.orbit.lineHeightTextNormal};
    font-weight: ${theme.orbit.fontWeightNormal};
    -webkit-text-size-adjust: 100%;
    width: 100%;
    ${hasTitle &&
    css`
      margin-top: ${theme.orbit.spaceXXSmall};
    `};
  `}
`;

StyledTileDescription.defaultProps = {
  theme: defaultTheme,
};

const IconRight = ({
  external,
  expandable,
  className,
}: {
  external?: Props["external"];
  // eslint-disable-next-line react/no-unused-prop-types
  expanded?: Props["expanded"];
  expandable?: Props["expandable"];
  className?: string;
}) => {
  if (expandable) return <ChevronDown color="secondary" className={className} />;
  if (external) return <NewWindow className={className} />;

  return <ChevronRight color="secondary" className={className} reverseOnRtl />;
};

export const StyledIconRight = styled(IconRight)`
  ${({
    theme,
    expanded,
  }: {
    theme: typeof defaultTheme;
    expanded?: Props["expanded"];
    expandable?: Props["expandable"];
  }) => css`
    color: ${theme.orbit.colorIconSecondary};
    margin: ${rtlSpacing(`0 0 0 ${theme.orbit.spaceMedium}`)};
    transition: ${transition(["color", "transform"], "fast", "ease-in-out")};
    ${expanded &&
    css`
      transform: rotate(-180deg);
    `};
  `}
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
  noHeaderIcon,
}: React.PropsWithChildren<Props>) => (
  <StyledTileHeader
    onClick={onClick}
    onKeyDown={onKeyDown}
    role={role}
    aria-expanded={ariaExpanded}
    aria-controls={ariaControls}
    id={id}
    tabIndex={tabIndex ? Number(tabIndex) : undefined}
  >
    <Stack align="center" justify="between" shrink spacing="none">
      {icon && <StyledTileIcon>{icon}</StyledTileIcon>}
      {header ||
        ((title || description) && (
          <Stack spacing="none" direction="column" shrink>
            {title && (
              <StyledTileTitle>
                <Heading type="title3" as="h3">
                  {title}
                </Heading>
              </StyledTileTitle>
            )}
            {description && (
              <StyledTileDescription hasTitle={!!title}>{description}</StyledTileDescription>
            )}
          </Stack>
        ))}
      {!noHeaderIcon && (
        <StyledIconRight external={external} expandable={expandable} expanded={expanded} />
      )}
    </Stack>
  </StyledTileHeader>
);

export default TileHeader;
