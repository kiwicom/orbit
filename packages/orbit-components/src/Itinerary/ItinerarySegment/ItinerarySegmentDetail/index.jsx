// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import HorizontalScroll from "../../../HorizontalScroll";
import Truncate from "../../../Truncate";
import { StyledBadge } from "../../../primitives/BadgePrimitive";
import { left, rtlSpacing } from "../../../utils/rtl";
import ChevronUp from "../../../icons/ChevronUp";
import ChevronDown from "../../../icons/ChevronDown";
import themeDefault from "../../../defaultTheme";
import Stack from "../../../Stack";
import Text from "../../../Text";
import Slide from "../../../utils/Slide";
import useBoundingRect from "../../../hooks/useBoundingRect";
import { useRandomIdSeed } from "../../../hooks/useRandomId";
import { usePart } from "../context";
import { useWidth } from "../../context";
import ItineraryIcon from "../ItineraryIcon";

import type { Props } from ".";

const StyledWrapper = styled.div`
  ${({ theme, opened }) => css`
    width: 100%;
    position: relative;
    padding: ${theme.orbit.spaceSmall} 0;
    box-sizing: border-box;
    background: ${opened && theme.orbit.paletteCloudLight};
    &:hover {
      background: ${theme.orbit.paletteCloudLight};
      ${StyledBadge} {
        background: ${theme.orbit.paletteWhite};
      }
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledWrapper.defaultProps = {
  theme: themeDefault,
};

const StyledDetailsIcon = styled.div`
  background: transparent;
  z-index: 1;
`;

const StyledInnerWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${rtlSpacing(`0 ${theme.orbit.spaceSmall}`)};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledInnerWrapper.defaultProps = {
  theme: themeDefault,
};

export const StyledSummary: any = styled.div`
  ${({ theme, opened }) => css`
    display: flex;
    align-items: center;
    border-radius: ${theme.orbit.borderRadiusBadge};
    width: 100%;
    overflow: hidden;
    ${StyledBadge} {
      background: ${opened && theme.orbit.paletteWhite};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSummary.defaultProps = {
  theme: themeDefault,
};

const StyledDuration = styled.div`
  ${({ $minWidth }) => css`
    display: flex;
    justify-content: flex-end;
    min-width: ${$minWidth && `${$minWidth}px`};
  `}
`;

const StyledExpandable = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.orbit.spaceSmall};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledExpandable.defaultProps = {
  theme: themeDefault,
};

const StyledExpandableContent = styled.div`
  ${({ $offset, theme }) => css`
    padding: 0 ${theme.orbit.spaceSmall};
    position: relative;
    z-index: 1;
    margin-${left}: ${parseInt(theme.orbit.spaceXSmall, 10) + $offset}px;
  `}
`;

const StyledHeadingOffset = styled.div`
  ${({ theme }) => css`
    margin-${left}: ${theme.orbit.spaceXLarge};
  `}
`;

const StyledIcon = styled.div`
  ${({ theme, isFirst, isLast }) => css`
    display: flex;
    align-items: center;
    position: relative;
    padding: ${theme.orbit.spaceXXSmall};
    z-index: 3;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      z-index: -1;
      background: ${theme.orbit.paletteWhite};
      ${isFirst &&
      css`
        border-radius: ${theme.orbit.spaceLarge} ${theme.orbit.spaceLarge} 0 0;
      `}
      ${isLast &&
      css`
        border-radius: 0 0 ${theme.orbit.spaceLarge} ${theme.orbit.spaceLarge};
      `}
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledIcon.defaultProps = {
  theme: themeDefault,
};

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledExpandableContent.defaultProps = {
  theme: themeDefault,
};

const ItinerarySegmentDetail = ({ duration, summary, content, icon }: Props): React.Node => {
  const { opened, toggleOpened } = usePart();
  const { calculatedWidth } = useWidth();
  const [{ height: slideHeight }, slideRef] = useBoundingRect({ height: opened ? null : 0 });
  const randomId = useRandomIdSeed();
  const [isOverflowed, setOverflowed] = React.useState(false);

  return (
    <StyledWrapper opened={opened}>
      <StyledInnerWrapper>
        <Stack align="center" spacing="small">
          <StyledDuration $minWidth={calculatedWidth || 60}>
            <Text size="small" weight="medium">
              {duration}
            </Text>
          </StyledDuration>
          <StyledDetailsIcon>
            <ItineraryIcon isDetails>{icon}</ItineraryIcon>
          </StyledDetailsIcon>
          <StyledSummary
            opened={opened}
            onClick={ev => {
              if (isOverflowed && opened) ev.stopPropagation();
            }}
          >
            <HorizontalScroll
              overflowElevation
              onOverflow={() => setOverflowed(true)}
              elevationColor="paletteCloudLight"
              scrollSnap="mandatory"
            >
              {summary}
            </HorizontalScroll>
          </StyledSummary>
          {opened ? <ChevronUp color="secondary" /> : <ChevronDown color="secondary" />}
        </Stack>
      </StyledInnerWrapper>
      <Slide
        maxHeight={slideHeight}
        expanded={opened}
        id={randomId("slide")}
        ariaLabelledBy={randomId("slide")}
      >
        <StyledExpandable ref={slideRef} onClick={toggleOpened}>
          <StyledExpandableContent $offset={calculatedWidth}>
            {content &&
              content.map(({ title, items }, idx) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <React.Fragment key={idx}>
                    <StyledHeadingOffset>
                      <Text size="small" weight="medium" spaceAfter="small">
                        {title}
                      </Text>
                    </StyledHeadingOffset>
                    <Stack
                      direction="column"
                      spacing="none"
                      spaceAfter={idx === content.length - 1 ? "none" : "medium"}
                    >
                      {items.map(({ icon: itemIcon, name, value }, id) => {
                        return (
                          // eslint-disable-next-line react/no-array-index-key
                          <Stack flex grow={false} align="center" key={id}>
                            <StyledIcon isFirst={id === 0} isLast={id === items.length - 1}>
                              {itemIcon}
                            </StyledIcon>
                            <Truncate>
                              <Text size="small">{name}</Text>
                            </Truncate>
                            <Truncate>
                              <Text size="small" weight="medium" align="right">
                                {value}
                              </Text>
                            </Truncate>
                          </Stack>
                        );
                      })}
                    </Stack>
                  </React.Fragment>
                );
              })}
          </StyledExpandableContent>
        </StyledExpandable>
      </Slide>
    </StyledWrapper>
  );
};

export default ItinerarySegmentDetail;
