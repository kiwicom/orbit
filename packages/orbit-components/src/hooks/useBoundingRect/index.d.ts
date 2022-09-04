import React from "react";

type inexactNumber = number | undefined | null;

type Dimensions = {
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
): [Dimensions, React.Ref<T> | undefined];

export { UseBoundingRect, UseBoundingRect as default };
