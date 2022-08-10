// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { ItinerarySegmentContext } from "./context";
import Stack from "../../Stack";
import getSpacingToken from "../../common/getSpacingToken";
import defaultTheme from "../../defaultTheme";
import handleKeyDown from "../../utils/handleKeyDown";
import Separator from "../../Separator";

import type { Props } from ".";

const StyledWrapper = styled.div`
  ${({ theme, noElevation, actionable }) => css`
    cursor: ${actionable && "pointer"};
    margin-bottom: ${getSpacingToken};
    box-shadow: ${!noElevation && theme.orbit.boxShadowFixed};
    border-radius: ${theme.orbit.borderRadiusLarge};
    padding: ${theme.orbit.spaceSmall} 0;
    ${actionable &&
    css`
      &:hover,
      &:focus {
        box-shadow: ${!noElevation && theme.orbit.boxShadowActionActive};
        outline: none;
      }
    `}
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const ItinerarySegment = ({
  children,
  spaceAfter,
  dataTest,
  noElevation,
  actionable = true,
  onClick,
  banner,
}: Props): React.Node => {
  const content = React.Children.toArray(children);
  const [opened, setOpened] = React.useState(false);

  const parts = (
    <Stack direction="column" spacing="none">
      {React.Children.map(children, (el, i) => {
        return (
          <ItinerarySegmentContext.Provider
            value={{
              index: i,
              opened,
              toggleOpened: () => setOpened(prev => !prev),
              last: i === React.Children.count(children) - 1,
              isNextHidden: content[i + 1] && content[i + 1].props.hidden,
              isPrevHidden: content[i - 1] && content[i - 1].props.hidden,
              isBanner: !!banner,
              count: React.Children.count(children),
              isHidden: el.props.hidden,
              noElevation: !!noElevation,
            }}
          >
            {el}
          </ItinerarySegmentContext.Provider>
        );
      })}
    </Stack>
  );

  const handleClick = (ev: SyntheticEvent<HTMLDivElement>) => {
    if (onClick) onClick(ev);
    setOpened(prev => !prev);
  };

  return (
    <StyledWrapper
      actionable={actionable}
      spaceAfter={spaceAfter}
      data-test={dataTest}
      tabIndex={0}
      onKeyDown={handleKeyDown(() => setOpened(prev => !prev))}
      onClick={handleClick}
      noElevation={noElevation}
    >
      {parts}
      {Boolean(banner) && <Separator spaceAfter="small" />}
      {banner}
    </StyledWrapper>
  );
};

export default ItinerarySegment;
