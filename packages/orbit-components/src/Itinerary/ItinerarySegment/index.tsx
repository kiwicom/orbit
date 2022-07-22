import * as React from "react";
import styled, { css } from "styled-components";

import * as Common from "../../common/types";
import { ItinerarySegmentContext } from "./context";
import Stack from "../../Stack";
import getSpacingToken from "../../common/getSpacingToken";
import defaultTheme from "../../defaultTheme";
import handleKeyDown from "../../utils/handleKeyDown";
import Separator from "../../Separator";
import { Props } from "./types";

const StyledWrapper = styled.div<{
  noElevation?: boolean;
  actionable?: boolean;
  spaceAfter?: Common.SpaceAfterSizes;
}>`
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
      }
    `}
  `}
`;

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
}: Props) => {
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
              // @ts-expect-error expected
              isNextHidden: content[i + 1] && content[i + 1].props.hidden,
              // @ts-expect-error expected
              isPrevHidden: content[i - 1] && content[i - 1].props.hidden,
              isBanner: !!banner,
              count: React.Children.count(children),
              // @ts-expect-error expected

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

  const handleClick = (ev: React.SyntheticEvent<HTMLDivElement>) => {
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
