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
        "first:[&_.orbit-tile-wrapper]:rounded-t-normal last:[&_.orbit-tile-wrapper]:rounded-b-normal not-last:[&_.orbit-tile-wrapper]:border-b not-last:[&_.orbit-tile-wrapper]:border-cloud-normal",
        "[&_.orbit-tile-wrapper]:duration-fast hover:[&_.orbit-tile-wrapper]:bg-cloud-normal focus:[&_.orbit-tile-wrapper]:bg-cloud-normal [&_.orbit-tile-wrapper]:rounded-none [&_.orbit-tile-wrapper]:shadow-none [&_.orbit-tile-wrapper]:transition-colors [&_.orbit-tile-wrapper]:ease-in-out",
      )}
      data-test={dataTest}
      id={id}
    >
      {children}
    </Component>
  );
};

export default TileGroup;
