import * as React from "react";
import cx from "clsx";

interface Props {
  noPadding: boolean;
  withPointer?: boolean;
  withBorder?: boolean;
  useMargins?: boolean;
}

const TileContent = React.forwardRef<HTMLDivElement, React.PropsWithChildren<Props>>(
  ({ children, noPadding, withPointer, withBorder, useMargins = true }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(
          "text-normal leading-normal",
          withPointer === true && "cursor-pointer",
          withBorder === true && "border-cloud-normal border-t",
          !noPadding && !useMargins && "p-md lm:p-lg",
          !noPadding && useMargins && "py-md mx-md lm:py-lg lm:mx-lg",
        )}
      >
        {children}
      </div>
    );
  },
);

export default TileContent;
