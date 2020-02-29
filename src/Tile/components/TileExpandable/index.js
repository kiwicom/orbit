// @flow
import * as React from "react";

import Slide from "../../../utils/Slide/index";
import randomID from "../../../utils/randomID/index";
import TileContent from "../TileContent";
import TileWrapper from "../TileWrapper";
import TileHeader from "../TileHeader";
import handleKeyDown from "../../../utils/handleKeyDown";

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
  dataTest,
}: Props) => {
  const [expanded, setExpanded] = React.useState(initialExpanded);
  const [contentHeight, setContentHeight] = React.useState(initialExpanded ? null : 0);
  const node = React.useRef<?HTMLDivElement>(null);

  const handleClick = event => {
    if (onClick) {
      onClick(event);
    }
    setExpanded(prevExpanded => !prevExpanded);
  };

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

  const hasHeader = !!(title || description || icon || header);

  const slideID = React.useMemo(() => randomID("slideID"), []);
  const labelID = React.useMemo(() => randomID("labelID"), []);
  return (
    <TileWrapper
      onClick={handleClick}
      onKeyDown={ev => handleKeyDown(ev, onClick, setExpanded(prevExpanded => !prevExpanded))}
      role="button"
      ariaExpanded={expanded}
      ariaControls={slideID}
      tabIndex="0"
      id={labelID}
      dataTest={dataTest}
    >
      {hasHeader && (
        <TileHeader
          title={title}
          description={description}
          icon={icon}
          header={header}
          expanded={expanded}
          expandable
        />
      )}
      <Slide maxHeight={contentHeight} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
        <TileContent noPadding={noPadding} ref={node} withBorder={hasHeader}>
          {children}
        </TileContent>
      </Slide>
    </TileWrapper>
  );
};

export default TileExpandable;
