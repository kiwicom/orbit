// @flow
import React from "react";
import styled, { css } from "styled-components";

import mq from "../../../utils/mediaQuery";
import { getSize } from "../../../Icon";
import { ICON_SIZES } from "../../../Icon/consts";
import defaultTheme from "../../../defaultTheme";
import Header from "../../components/Header";

const SpacingMobile = css`
  ${({ theme }) => String(parseInt(theme.orbit.spaceMedium, 10) + 1)}px;
`;

const SpacingDesktop = css`
  ${({ theme }) => String(parseInt(theme.orbit.spaceLarge, 10) + 1)}px;
`;

const StyledCardSectionHeader = styled.div`
  transition: margin ${({ theme }) => theme.orbit.durationFast} linear;
  cursor: ${({ expandable }) => expandable && "pointer"};
  position: relative;
  padding: ${({ theme }) => theme.orbit.spaceMedium};
  margin: -${SpacingMobile};
  margin-bottom: ${({ expanded }) => expanded && 0};
  min-height: ${({ expandable }) => expandable && getSize(ICON_SIZES.MEDIUM)};

  ${mq.tablet(css`
    margin: -${SpacingDesktop};
    padding: ${({ theme }) => theme.orbit.spaceLarge};
    margin-bottom: ${({ expanded }) => expanded && 0};
  `)}

  &:hover {
    background: ${({ theme, expandable }) => expandable && theme.orbit.paletteWhiteHover};
  }

  &:focus {
    background: ${({ theme, expandable }) => expandable && theme.orbit.paletteWhiteHover};
    outline: none;
  }
`;

StyledCardSectionHeader.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  title?: React$Node,
  description?: React$Node,
  icon?: React$Node,
  actions?: React$Node,
  dataA11ySection?: string,
  header?: React$Node,
  expandable?: boolean,
  expanded?: boolean,
  handleKeyDown: (ev: SyntheticKeyboardEvent<HTMLDivElement>) => void,
  onClick?: () => void,
  slideID: string,
  labelID: string,
|};

const CardSectionHeader = ({
  title,
  description,
  icon,
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
      tabIndex={expandable ? "0" : undefined}
    >
      <Header
        title={title}
        description={description}
        icon={icon}
        expandable={expandable}
        header={header}
        expanded={expanded}
        actions={actions}
        dataA11ySection={dataA11ySection}
      />
    </StyledCardSectionHeader>
  );
};

export default CardSectionHeader;
