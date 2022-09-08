import React from "react";

type inexactNumber = number | null;

export type Dimensions = {
  x: inexactNumber;
  y: inexactNumber;
  width: inexactNumber;
  height: inexactNumber;
  top: inexactNumber;
  right: inexactNumber;
  bottom: inexactNumber;
  left: inexactNumber;
};

declare function UseBoundingRect<T extends HTMLElement>(
  initialValue: Partial<Dimensions> | undefined | null,
): [Dimensions, React.RefObject<T>];

export { UseBoundingRect, UseBoundingRect as default };
