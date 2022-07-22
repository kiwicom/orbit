import * as React from "react";
import styled, { css } from "styled-components";

import transition from "../../../utils/transition";
import mq from "../../../utils/mediaQuery";
import { getSize } from "../../../Icon";
import { ICON_SIZES } from "../../../Icon/consts";
import defaultTheme from "../../../defaultTheme";
import Header from "../../components/Header";
import { As } from "../../../Heading/types";

const SpacingMobile = css`
  ${({ theme }) => String(parseInt(theme.orbit.spaceMedium, 10) + 1)}px;
`;

const SpacingDesktop = css`
  ${({ theme }) => String(parseInt(theme.orbit.spaceLarge, 10) + 1)}px;
`;

const StyledCardSectionHeader = styled.div<{
  expandable?: boolean;
  isContent?: boolean;
  expanded?: boolean;
}>`
  ${({ theme, expandable, isContent, expanded }) => css`
    transition: ${transition(["margin"], "fast", "linear")};
    cursor: ${expandable && "pointer"};
    position: relative;
    padding: ${theme.orbit.spaceMedium};
    margin: -${SpacingMobile};
    margin-bottom: ${expanded && isContent && 0};
    min-height: ${expandable && getSize(ICON_SIZES.MEDIUM)};

    ${mq.largeMobile(css`
      margin: -${SpacingDesktop};
      padding: ${theme.orbit.spaceLarge};
      margin-bottom: ${expanded && isContent && 0};
    `)}

    &:hover {
      background: ${expandable && theme.orbit.paletteWhiteHover};
    }

    &:focus {
      background: ${expandable && theme.orbit.paletteWhiteHover};
      z-index: 1;
    }
  `}
`;

StyledCardSectionHeader.defaultProps = {
  theme: defaultTheme,
};

interface Props {
  title?: React.ReactNode;
  titleAs?: As;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  dataA11ySection?: string;
  header?: React.ReactNode;
  expandable?: boolean;
  expanded?: boolean;
  handleKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  slideID: string;
  isContent: boolean;
  labelID: string;
}

const CardSectionHeader = ({
  title,
  titleAs,
  description,
  icon,
  isContent,
  expandable,
  expanded,
  onClick,
  slideID,
  labelID,
  actions,
  handleKeyDown,
  header,
  dataA11ySection,
}: Props) => {
  return (
    <StyledCardSectionHeader
      expandable={expandable}
      expanded={expanded}
      onClick={onClick}
      aria-expanded={expandable ? expanded : undefined}
      aria-controls={expandable ? slideID : undefined}
      id={labelID}
      role={expandable ? "button" : undefined}
      onKeyDown={handleKeyDown}
      tabIndex={expandable ? 0 : undefined}
      isContent={isContent}
    >
      <Header
        title={title}
        titleAs={titleAs}
        description={description}
        icon={icon}
        expandable={expandable}
        header={header}
        expanded={expanded}
        actions={actions}
        isSection
        dataA11ySection={dataA11ySection}
      />
    </StyledCardSectionHeader>
  );
};

export default CardSectionHeader;
