"use client";

import * as React from "react";
import cx from "clsx";

import Heading from "../Heading";
import Stack from "../Stack";
import ButtonLink from "../ButtonLink";
import ChevronDown from "../icons/ChevronDown";
import Slide from "../utils/Slide";
import { useRandomIdSeed } from "../hooks/useRandomId";
import useBoundingRect from "../hooks/useBoundingRect";
import type { Props } from "./types";

const AnimatedIcon = ({ expanded }: { expanded?: boolean }) => {
  return (
    <ChevronDown
      className={cx("duration-fast transition-transform ease-in-out", expanded && "rotate-180	")}
      color="secondary"
    />
  );
};

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
  const isControlledComponent = expandedProp != null;
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
    <div
      className="border-b-cloud-normal pb-300 mb-400 block w-full border-b border-solid last:m-0 last:border-none"
      data-test={dataTest}
      id={id}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className="block w-full cursor-pointer"
        onClick={handleClick}
        role="button"
        tabIndex={-1}
        id={labelID}
      >
        <Stack justify="between" align="center">
          {label && !customLabel && <Heading type="title4">{label}</Heading>}
          {customLabel}
          <Stack inline grow={false} align="center" spacing="300">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            <div
              className="flex items-center"
              onClick={ev => {
                ev.stopPropagation();
              }}
            >
              {actions}
            </div>
            <ButtonLink
              iconLeft={<AnimatedIcon expanded={expanded} />}
              size="small"
              type="secondary"
              ariaLabelledby={labelID}
              ariaExpanded={expanded}
              ariaControls={slideID}
            />
          </Stack>
        </Stack>
      </div>
      <Slide maxHeight={height} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
        <div className="my-300 mx-0" ref={node}>
          {children}
        </div>
      </Slide>
    </div>
  );
};

export default Collapse;
