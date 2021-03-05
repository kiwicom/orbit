// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import getSpacingToken from "../../common/getSpacingToken";
import themeDefault from "../../defaultTheme";
import { left } from "../../utils/rtl";
import BadgeList from "../../BadgeList";
import { useWidth } from "../context";

import type { Props } from ".";

const StyledWrapper = styled.div`
  ${({ theme, offset }) => css`
    margin-bottom: ${getSpacingToken};
    margin-${left}: ${
    parseInt(theme.orbit.spaceSmall, 10) + parseInt(theme.orbit.spaceSmall, 10) + offset
  }px`};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledWrapper.defaultProps = {
  theme: themeDefault,
};

const ItineraryBadgeList = ({ children, spaceAfter = "medium", ...props }: Props): React.Node => {
  const { calculatedWidth: offset } = useWidth();
  return (
    <StyledWrapper offset={offset} spaceAfter={spaceAfter}>
      <BadgeList {...props}>{children}</BadgeList>
    </StyledWrapper>
  );
};

export default ItineraryBadgeList;
