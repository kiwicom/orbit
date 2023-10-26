"use client";

import * as React from "react";
import cx from "clsx";

import type { Props } from "./types";

const TileGroup = ({ children, dataTest, id, as }: Props) => {
  const Component = (as ?? "div") as React.ElementType;

  return (
    <Component
      className={cx(
        "shadow-action rounded-normal [&_.orbit-slide]:bg-white-normal m-0 w-full p-0",
        "[&_.orbit-tile-wrapper]:first:rounded-t-normal [&_.orbit-tile-wrapper]:last:rounded-b-normal [&_.orbit-tile-wrapper]:not-last:border-b [&_.orbit-tile-wrapper]:not-last:border-cloud-normal",
        "[&_.orbit-tile-wrapper]:duration-fast [&_.orbit-tile-wrapper]:hover:bg-white-normal [&_.orbit-tile-wrapper]:focus:bg-white-normal [&_.orbit-tile-wrapper]:rounded-none [&_.orbit-tile-wrapper]:shadow-none [&_.orbit-tile-wrapper]:transition-colors [&_.orbit-tile-wrapper]:ease-in-out",
      )}
      data-test={dataTest}
      id={id}
    >
      {children}
    </Component>
  );
};

export default TileGroup;
