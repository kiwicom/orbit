import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";
import { StyledSeparator } from "../../../Separator";
import ChevronForward from "../../../icons/ChevronForward";
import { StyledWrapper as StyledBadgeListWrapper } from "../../ItineraryBadgeList";
import type { Props } from "./types";
import { left } from "../../../utils/rtl";

const StyledBannerWrapper = styled.div<{ $actionable?: boolean }>`
  ${({ theme, $actionable }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0 ${theme.orbit.spaceMedium};
    cursor: ${$actionable ? "pointer" : "default"};

    ${StyledBadgeListWrapper} {
      margin-${left}: 0 !important;
    }

    ${StyledSeparator} {
      width: 150% !important;
      margin-left: -${theme.orbit.spaceMedium};
    }

    & > div {
      max-width: calc(100% - 20px);
    }
  `}
`;

StyledBannerWrapper.defaultProps = {
  theme: defaultTheme,
};

const ItinerarySegmentBanner = ({ onClick, children }: Props) => {
  return (
    <StyledBannerWrapper
      $actionable={!!onClick}
      onClick={ev => {
        ev.stopPropagation();
        if (onClick) onClick(ev);
      }}
    >
      <div>{children}</div>
      {onClick && <ChevronForward color="secondary" />}
    </StyledBannerWrapper>
  );
};

export default ItinerarySegmentBanner;
