import * as React from "react";
import styled, { css } from "styled-components";

import Heading from "../Heading";
import Stack from "../Stack";
import ButtonLink from "../ButtonLink";
import ChevronDown from "../icons/ChevronDown";
import Slide from "../utils/Slide";
import defaultTheme from "../defaultTheme";
import { useRandomIdSeed } from "../hooks/useRandomId";
import useBoundingRect from "../hooks/useBoundingRect";
import type { Props } from "./types";

const AnimatedIcon = styled(ChevronDown)<{ expanded?: boolean }>`
  ${({ theme, expanded }) => css`
    transition: transform ${theme.orbit.durationFast} ease-in-out;
    ${expanded &&
    css`
      transform: rotate(180deg);
    `};
  `}
`;

AnimatedIcon.defaultProps = {
  theme: defaultTheme,
};

const StyledCollapse = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: block;
    border-bottom: 1px solid ${theme.orbit.paletteCloudNormal};
    padding-bottom: ${theme.orbit.spaceSmall};
    margin-bottom: ${theme.orbit.spaceMedium};
    :last-child,
    :only-child {
      border: 0;
      margin: 0;
    }
  `}
`;

StyledCollapse.defaultProps = {
  theme: defaultTheme,
};

const StyledCollapseLabel = styled.div`
  width: 100%;
  display: block;
  cursor: pointer;
`;

StyledCollapseLabel.defaultProps = {
  theme: defaultTheme,
};

const StyledCollapseChildren: any = styled.div`
  ${({ theme }) => css`
    margin: ${theme.orbit.spaceSmall} 0;
  `}
`;

StyledCollapseChildren.defaultProps = {
  theme: defaultTheme,
};

const StyledActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Collapse = ({
  initialExpanded = false,
  customLabel,
  expanded: expandedProp,
  label,
  children,
  dataTest,
  id,
  onClick,
  actions,
}: Props) => {
  const isControlledComponent = React.useMemo(() => expandedProp != null, [expandedProp]);
  const [expandedState, setExpandedState] = React.useState(
    isControlledComponent ? expandedProp : initialExpanded,
  );
  const expanded = isControlledComponent ? expandedProp : expandedState;
  const [{ height }, node] = useBoundingRect<HTMLDivElement>({ height: expanded ? null : 0 });

  const randomId = useRandomIdSeed();
  const slideID = randomId("slideID");
  const labelID = randomId("labelID");

  const handleClick = React.useCallback(
    event => {
      if (!isControlledComponent) {
        if (onClick) {
          onClick(event, !expanded);
        }

        setExpandedState(!expanded);
      } else if (onClick) {
        onClick(event, !expanded);
      }
    },
    [expanded, isControlledComponent, onClick],
  );

  return (
    <StyledCollapse data-test={dataTest} id={id}>
      <StyledCollapseLabel onClick={handleClick} role="button" id={labelID}>
        <Stack justify="between" align="center">
          {label && !customLabel && <Heading type="title4">{label}</Heading>}
          {customLabel}
          <Stack inline grow={false} align="center" spacing="small">
            <StyledActionsWrapper
              onClick={ev => {
                ev.stopPropagation();
              }}
            >
              {actions}
            </StyledActionsWrapper>
            <ButtonLink
              iconLeft={<AnimatedIcon color="secondary" expanded={expanded} />}
              size="small"
              type="secondary"
              ariaLabelledby={labelID}
              ariaExpanded={expanded}
              ariaControls={slideID}
            />
          </Stack>
        </Stack>
      </StyledCollapseLabel>
      <Slide maxHeight={height} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
        <StyledCollapseChildren ref={node}>{children}</StyledCollapseChildren>
      </Slide>
    </StyledCollapse>
  );
};

export default Collapse;
export { Props };
