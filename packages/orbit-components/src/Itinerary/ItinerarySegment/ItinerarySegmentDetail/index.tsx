import * as React from "react";
import styled, { css } from "styled-components";

import HorizontalScroll from "../../../HorizontalScroll";
import Truncate from "../../../Truncate";
import { left, rtlSpacing } from "../../../utils/rtl";
import ChevronUp from "../../../icons/ChevronUp";
import ChevronDown from "../../../icons/ChevronDown";
import themeDefault from "../../../defaultTheme";
import Stack from "../../../Stack";
// TODO: remove after designers will resolve status colors
// https://skypicker.slack.com/archives/GSGN9BN6Q/p1674568716519889
import TemporaryText from "../../ItineraryTemporaryText";
import Text from "../../../Text";
import Slide from "../../../utils/Slide";
import useBoundingRect from "../../../hooks/useBoundingRect";
import { useRandomIdSeed } from "../../../hooks/useRandomId";
import { usePart } from "../context";
import { useWidth } from "../../context";
import ItineraryIcon from "../ItineraryIcon";
import type { Props } from "./types";

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 10px 0;
  box-sizing: border-box;
`;

const StyledDetailsIcon = styled.div`
  background: transparent;
  z-index: 1;
`;

const StyledInnerWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${rtlSpacing(`0 ${theme.orbit.spaceSmall}`)};
  `}
`;

StyledInnerWrapper.defaultProps = {
  theme: themeDefault,
};

export const StyledSummary = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

StyledSummary.defaultProps = {
  theme: themeDefault,
};

const StyledDuration = styled.div<{ $minWidth?: number }>`
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

StyledExpandable.defaultProps = {
  theme: themeDefault,
};

const StyledExpandableContent = styled.div<{ $offset: number }>`
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

const StyledIcon = styled.div<{ isFirst?: boolean; isLast?: boolean }>`
  ${({ theme, isFirst, isLast }) => css`
    display: flex;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    padding: ${theme.orbit.spaceXXSmall};
    z-index: 3;
    svg {
      padding-top: ${isFirst && theme.orbit.spaceXXSmall};
      padding-bottom: ${isLast && theme.orbit.spaceXXSmall};
    }
    &:after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      border-left: 1px solid ${theme.orbit.paletteCloudNormalActive};
      border-right: 1px solid ${theme.orbit.paletteCloudNormalActive};
      z-index: -1;
      background: ${theme.orbit.paletteWhite};
      ${isFirst &&
      css`
        border: 1px solid ${theme.orbit.paletteCloudNormalActive};
        border-bottom: transparent;
        border-radius: ${theme.orbit.spaceLarge} ${theme.orbit.spaceLarge} 0 0;
      `}
      ${isLast &&
      css`
        border: 1px solid ${theme.orbit.paletteCloudNormalActive};
        border-top: transparent;
        border-radius: 0 0 ${theme.orbit.spaceLarge} ${theme.orbit.spaceLarge};
      `}
    }
  `}
`;

StyledIcon.defaultProps = {
  theme: themeDefault,
};

StyledExpandableContent.defaultProps = {
  theme: themeDefault,
};

const ItinerarySegmentDetail = ({ duration, summary, content, icon }: Props) => {
  const { opened, toggleOpened } = usePart();
  const { calculatedWidth } = useWidth();
  const [{ height: slideHeight }, slideRef] = useBoundingRect<HTMLDivElement>({
    height: opened ? null : 0,
  });
  const randomId = useRandomIdSeed();
  const [isOverflowed, setOverflowed] = React.useState(false);

  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <Stack align="center" spacing="small">
          <StyledDuration $minWidth={calculatedWidth || 60}>
            <TemporaryText as="div" size="small" weight="medium">
              {duration}
            </TemporaryText>
          </StyledDuration>
          <StyledDetailsIcon>
            <ItineraryIcon isDetails>{icon}</ItineraryIcon>
          </StyledDetailsIcon>
          <StyledSummary
            onClick={ev => {
              if (isOverflowed && opened) ev.stopPropagation();
            }}
          >
            <HorizontalScroll
              overflowElevation
              onOverflow={() => setOverflowed(true)}
              elevationColor="paletteWhite"
              scrollSnap="mandatory"
            >
              {summary}
            </HorizontalScroll>
          </StyledSummary>
          {content &&
            (opened ? <ChevronUp color="secondary" /> : <ChevronDown color="secondary" />)}
        </Stack>
      </StyledInnerWrapper>
      {content && (
        <Slide
          maxHeight={slideHeight || 0}
          expanded={opened}
          id={randomId("slide")}
          ariaLabelledBy={randomId("slide")}
        >
          <StyledExpandable ref={slideRef} onClick={toggleOpened}>
            <StyledExpandableContent $offset={calculatedWidth}>
              {content.map(({ title, items }, idx) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <React.Fragment key={idx}>
                    <StyledHeadingOffset>
                      <TemporaryText as="div" size="small" weight="medium" spaceAfter="small">
                        {title}
                      </TemporaryText>
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
                              <TemporaryText as="div" size="small" weight="medium" align="right">
                                {value}
                              </TemporaryText>
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
      )}
    </StyledWrapper>
  );
};

export default ItinerarySegmentDetail;
