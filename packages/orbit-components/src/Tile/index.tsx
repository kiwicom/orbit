import * as React from "react";

import TileHeader from "./components/TileHeader";
import TileContent from "./components/TileContent";
import TileExpandable from "./components/TileExpandable";
import TileWrapper from "./components/TileWrapper";
import handleKeyDown from "../utils/handleKeyDown";
import { Props } from "./types";

const Tile = ({
  href,
  external = false,
  dataTest,
  id,
  icon,
  title,
  description,
  header,
  children,
  noPadding = false,
  expandable = false,
  initialExpanded = false,
  noHeaderIcon = false,
  htmlTitle,
  onClick,
  as,
}: Props) => {
  if (expandable) {
    return (
      <TileExpandable
        dataTest={dataTest}
        id={id}
        icon={icon}
        title={title}
        description={description}
        header={header}
        noPadding={noPadding}
        initialExpanded={initialExpanded}
        onClick={onClick}
        htmlTitle={htmlTitle}
      >
        {children}
      </TileExpandable>
    );
  }
  const hasHeader = !!(title || description || icon || header);

  return (
    <TileWrapper
      href={href}
      external={external}
      dataTest={dataTest}
      id={id}
      onClick={onClick}
      onKeyDown={handleKeyDown(onClick)}
      as={as}
      tabIndex={!href ? "0" : undefined}
      role={onClick ? "button" : undefined}
      htmlTitle={htmlTitle}
    >
      {hasHeader && (
        <TileHeader
          title={title}
          description={description}
          icon={icon}
          external={external}
          header={header}
          expandable={expandable}
          noHeaderIcon={noHeaderIcon}
        />
      )}
      {children && (
        <TileContent noPadding={noPadding} withPointer withBorder={hasHeader} useMargins={false}>
          {children}
        </TileContent>
      )}
    </TileWrapper>
  );
};

export default Tile;
