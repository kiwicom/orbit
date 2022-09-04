import * as React from "react";

import * as Common from "../../../common/common";
import Slide from "../../../utils/Slide";
import { useRandomIdSeed } from "../../../hooks/useRandomId";
import TileContent from "../TileContent";
import TileWrapper from "../TileWrapper";
import TileHeader from "../TileHeader";
import handleKeyDown from "../../../utils/handleKeyDown";
import useBoundingRect from "../../../hooks/useBoundingRect";

interface Props extends Common.Globals {
  initialExpanded: boolean;
  noPadding: boolean;
  onClick?: Common.Event<
    React.SyntheticEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
  >;
  title?: React.ReactNode;
  description?: React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  htmlTitle?: string;
}

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
  htmlTitle,
}: React.PropsWithChildren<Props>) => {
  const [expanded, setExpanded] = React.useState(initialExpanded);
  const [{ height }, node] = useBoundingRect<HTMLDivElement>({
    height: initialExpanded ? null : 0,
  });

  const handleClick = (ev: React.SyntheticEvent<HTMLDivElement>) => {
    if (onClick) onClick(ev);
    setExpanded(prevExpanded => !prevExpanded);
  };

  const hasHeader = !!(title || description || icon || header);
  const randomId = useRandomIdSeed();
  const slideID = randomId("slideID");
  const labelID = randomId("labelID");

  return (
    <TileWrapper
      onClick={handleClick}
      onKeyDown={handleKeyDown(onClick, () => setExpanded(prevExpanded => !prevExpanded))}
      role="button"
      ariaExpanded={expanded}
      ariaControls={slideID}
      tabIndex={0}
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
          expanded={expanded}
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
