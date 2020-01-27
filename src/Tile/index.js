// @flow
import React from "react";

import TileHeader from "./components/TileHeader";
import TileContent from "./components/TileContent";
import TileExpandable from "./components/TileExpandable";
import TileWrapper from "./components/TileWrapper";
import KEY_CODE_MAP from "../common/keyMaps";

import { type Props } from ".";

const Tile = ({
  href,
  external = false,
  dataTest,
  icon,
  title,
  description,
  header,
  children,
  noPadding = false,
  expandable = false,
  initialExpanded = false,
  onClick,
}: Props) => {
  if (expandable) {
    return (
      <TileExpandable
        dataTest={dataTest}
        icon={icon}
        title={title}
        description={description}
        header={header}
        noPadding={noPadding}
        initialExpanded={initialExpanded}
        onClick={onClick}
      >
        {children}
      </TileExpandable>
    );
  }
  const hasHeader = !!(title || description || icon || header);
  const handleKeyDown = ev => {
    if (ev.keyCode === KEY_CODE_MAP.ENTER) {
      if (onClick) {
        onClick(ev);
      }
    } else if (ev.keyCode === KEY_CODE_MAP.SPACE) {
      ev.preventDefault();
      if (onClick) {
        onClick(ev);
      }
    }
  };
  return (
    <TileWrapper
      href={href}
      external={external}
      dataTest={dataTest}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      as={href ? "a" : "div"}
      tabIndex={!href ? "0" : undefined}
      role={!href ? "button" : undefined}
    >
      {hasHeader && (
        <TileHeader
          title={title}
          description={description}
          icon={icon}
          header={header}
          expandable={expandable}
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
