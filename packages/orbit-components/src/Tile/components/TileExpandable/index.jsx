// @flow
import * as React from "react";

import Slide from "../../../utils/Slide";
import { useRandomIdSeed } from "../../../hooks/useRandomId";
import TileContent from "../TileContent";
import TileWrapper from "../TileWrapper";
import TileHeader from "../TileHeader";
import handleKeyDown from "../../../utils/handleKeyDown";
import useBoundingRect from "../../../hooks/useBoundingRect";

import type { Props } from ".";

const TileExpandable = ({
  initialExpanded,
  noPadding,
  children,
  onClick,
  title,
  expanded,
  description,
  header,
  icon,
  dataTest,
  htmlTitle,
}: Props): React.Node => {
  const [isExpanded, setExpanded] = React.useState(initialExpanded);
  const [{ height }, node] = useBoundingRect({ height: initialExpanded ? null : 0 });

  const isControlled = React.useMemo(() => expanded != null, [expanded]);

  const handleClick = ev => {
    if (onClick) onClick(ev);
    setExpanded(prevExpanded => !prevExpanded);
  };

  React.useEffect(() => {
    if (isControlled) {
      setExpanded(expanded);
    }
  }, [expanded, isControlled]);

  const hasHeader = !!(title || description || icon || header);
  const randomId = useRandomIdSeed();
  const slideID = randomId("slideID");
  const labelID = randomId("labelID");

  return (
    <TileWrapper
      onClick={handleClick}
      onKeyDown={handleKeyDown(onClick, () => setExpanded(prevExpanded => !prevExpanded))}
      role="button"
      ariaExpanded={isExpanded}
      ariaControls={slideID}
      tabIndex="0"
      id={labelID}
      dataTest={dataTest}
      htmlTitle={htmlTitle}
    >
      {hasHeader && (
        <TileHeader
          title={title}
          description={description}
          icon={icon}
          header={header}
          expanded={isExpanded}
          expandable
        />
      )}
      <Slide maxHeight={height} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
        <TileContent noPadding={noPadding} ref={node} withBorder={hasHeader}>
          {children}
        </TileContent>
      </Slide>
    </TileWrapper>
  );
};

export default TileExpandable;
