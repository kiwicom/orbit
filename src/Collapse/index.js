// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import Heading from "../Heading";
import Stack from "../Stack";
import ButtonLink from "../ButtonLink";
import ChevronDown from "../icons/ChevronDown";
import Slide from "../utils/Slide";
import defaultTheme from "../defaultTheme";
import randomID from "../utils/randomID";
import { rtlSpacing } from "../utils/rtl";

import type { Props } from "./index";

const AnimatedIcon = styled(ChevronDown)`
  transition: transform ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  ${({ expanded }) =>
    expanded &&
    css`
      transform: rotate(180deg);
    `};
`;

AnimatedIcon.defaultProps = {
  theme: defaultTheme,
};
const StyledCollapse = styled.div`
  width: 100%;
  display: block;
  border-bottom: 1px solid ${({ theme }) => theme.orbit.paletteCloudNormal};
  padding-bottom: ${({ theme }) => theme.orbit.spaceMedium};
  margin-bottom: ${({ theme }) => theme.orbit.spaceMedium};
  :last-child,
  :only-child {
    border: 0;
    margin: 0;
  }
`;

StyledCollapse.defaultProps = {
  theme: defaultTheme,
};

const StyledCollapseLabel = styled.div`
  width: 100%;
  display: block;
  cursor: pointer;
`;

const StyledCollapseChildren = styled.div`
  margin-top: ${({ theme }) => theme.orbit.spaceXSmall};
`;

StyledCollapseChildren.defaultProps = {
  theme: defaultTheme,
};

const StyledRightContentWrapper = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceSmall}`)};
  }
`;

StyledRightContentWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledActionsWrapper = styled.div``;

const Collapse = ({
  initialExpanded = false,
  expanded: expandedProp,
  label,
  children,
  dataTest,
  onClick,
  actions,
}: Props) => {
  const isControlledComponent = React.useMemo(() => expandedProp != null, [expandedProp]);
  const [expandedState, setExpandedState] = React.useState(
    isControlledComponent ? expandedProp : initialExpanded,
  );
  const expanded = isControlledComponent ? expandedProp : expandedState;
  const [contentHeight, setContentHeight] = React.useState(expanded ? null : 0);
  const node = React.useRef(null);

  React.useEffect(() => {
    const calculateHeight = () => {
      if (node && node.current) {
        const { height } = node.current.getBoundingClientRect();
        setContentHeight(height);
      }
    };

    calculateHeight();

    window.addEventListener("resize", calculateHeight);
    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  const slideID = React.useMemo(() => randomID("slideID"), []);
  const labelID = React.useMemo(() => randomID("labelID"), []);

  const handleClick = React.useCallback(
    event => {
      if (!isControlledComponent) {
        if (onClick) {
          onClick(event, !expanded);
        }
        setExpandedState(!expanded);
      }
      if (onClick) {
        onClick(event, !expanded);
      }
    },
    [expanded, isControlledComponent, onClick],
  );

  return (
    <StyledCollapse data-test={dataTest}>
      <StyledCollapseLabel
        onClick={handleClick}
        role="button"
        aria-expanded={expanded}
        aria-controls={slideID}
        id={labelID}
      >
        <Stack direction="row" justify="between" align="center">
          <Heading type="title4" element="div">
            {label}
          </Heading>
          {/* TODO: dictionary for title */}
          <StyledRightContentWrapper>
            <StyledActionsWrapper
              onClick={ev => {
                ev.stopPropagation();
              }}
            >
              {actions}
            </StyledActionsWrapper>
            <ButtonLink
              iconLeft={<AnimatedIcon expanded={expanded} />}
              transparent
              size="small"
              type="secondary"
            />
          </StyledRightContentWrapper>
        </Stack>
      </StyledCollapseLabel>
      <Slide maxHeight={contentHeight} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
        <StyledCollapseChildren ref={node}>{children}</StyledCollapseChildren>
      </Slide>
    </StyledCollapse>
  );
};

export default Collapse;
