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

declare const UseBoundingRect: (
  initialValue: Partial<Dimensions> | undefined | null,
) => [Dimensions, { current: HTMLElement | undefined | null }];

export { UseBoundingRect, UseBoundingRect as default };
