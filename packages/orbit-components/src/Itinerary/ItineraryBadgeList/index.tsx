import * as React from "react";
import styled, { css } from "styled-components";

import * as Common from "../../common/common";
import getSpacingToken from "../../common/getSpacingToken";
import themeDefault from "../../defaultTheme";
import { left } from "../../utils/rtl";
import BadgeList from "../../BadgeList";
import { useWidth } from "../context";
import { Props } from "./index.d";

export const StyledWrapper = styled.div<{ offset: number; spaceAfter?: Common.SpaceAfterSizes }>`
  ${({ theme, offset }) => css`
    margin-bottom: ${getSpacingToken};
    margin-${left}: ${
    parseInt(theme.orbit.spaceSmall, 10) + parseInt(theme.orbit.spaceSmall, 10) + offset
  }px`};
`;

StyledWrapper.defaultProps = {
  theme: themeDefault,
};

const ItineraryBadgeList = ({ children, spaceAfter = "medium", ...props }: Props) => {
  const { calculatedWidth: offset } = useWidth();
  return (
    <StyledWrapper offset={offset} spaceAfter={spaceAfter}>
      <BadgeList {...props}>{children}</BadgeList>
    </StyledWrapper>
  );
};

export default ItineraryBadgeList;
