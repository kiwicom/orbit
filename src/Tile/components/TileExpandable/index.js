// @flow
import React, { useEffect, useRef, useState } from "react";

import Slide from "../../../utils/Slide/index";
import randomID from "../../../utils/randomID/index";
import TileContent from "../TileContent";
import TileHeader from "../TileHeader";
import KEY_CODE_MAP from "../../../common/keyMaps";

import type { Props } from ".";

const TileExpandable = ({
  initialExpanded,
  noPadding,
  children,
  onClick,
  title,
  description,
  header,
  icon,
}: Props) => {
  const [expanded, setExpanded] = useState(initialExpanded);
  const [contentHeight, setContentHeight] = useState(initialExpanded ? null : 0);
  const node = useRef(null);

  const handleClick = event => {
    if (onClick) {
      onClick(event);
    }
    setExpanded(prevExpanded => !prevExpanded);
  };

  const handleKeyDown = ev => {
    if (ev.keyCode === KEY_CODE_MAP.ENTER) {
      setExpanded(prevExpanded => !prevExpanded);
      if (onClick) {
        onClick(ev);
      }
    } else if (ev.keyCode === KEY_CODE_MAP.SPACE) {
      ev.preventDefault();
      setExpanded(prevExpanded => !prevExpanded);
      if (onClick) {
        onClick(ev);
      }
    }
  };

  useEffect(() => {
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

  const hasHeader = !!(title || description || icon || header);

  const slideID = React.useMemo(() => randomID("slideID"), []);
  const labelID = React.useMemo(() => randomID("labelID"), []);
  return (
    <>
      {hasHeader && (
        <TileHeader
          title={title}
          description={description}
          icon={icon}
          header={header}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          expanded={expanded}
          role="button"
          ariaExpanded={expanded}
          ariaControls={slideID}
          tabIndex="0"
          id={labelID}
          expandable
        />
      )}
      <Slide maxHeight={contentHeight} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
        <TileContent noPadding={noPadding} ref={node} withBorder={hasHeader}>
          {children}
        </TileContent>
      </Slide>
    </>
  );
};

export default TileExpandable;
