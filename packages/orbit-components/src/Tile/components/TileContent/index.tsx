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
          !noPadding && !useMargins && "p-400 lm:p-600",
          !noPadding && useMargins && "py-400 mx-400 lm:py-600 lm:mx-600",
        )}
      >
        {children}
      </div>
    );
  },
);

export default TileContent;
