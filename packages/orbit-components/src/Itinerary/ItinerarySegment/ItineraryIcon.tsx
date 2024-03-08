import * as React from "react";
import cx from "clsx";

import { usePart } from "./context";
import AlertCircle from "../../icons/AlertCircle";
import type { Status } from "../types";
import StarFull from "../../icons/StarFull";
import CircleEmpty from "../../icons/CircleSmallEmpty";
import CircleSmall from "../../icons/CircleSmall";

interface Props {
  type?: Status;
  children?: React.ReactNode;
}

const RenderedIcon = ({
  isPrevHidden,
  isLast,
  isHidden,
  children,
  type,
}: {
  isHidden?: boolean;
  isPrevHidden: boolean;
  isLast: boolean;
  children: React.ReactNode;
  type: Props["type"];
}): JSX.Element => {
  if (type && children !== null)
    return <AlertCircle size="small" color={type === "neutral" ? "primary" : type} />;
  if (isHidden) return <StarFull color="warning" size="small" />;
  if (isPrevHidden && isLast) return <CircleEmpty size="small" color="tertiary" />;

  return <>{children || <CircleSmall size="small" color="secondary" />}</>;
};

const ItinerarySegmentStopIcon = ({ type, children }: Props) => {
  const { index, last, isPrevHidden, isHidden, count } = usePart();

  return (
    <div
      className={cx(
        "z-default flex justify-center",
        "[&_svg]:overflow-hidden",
        last || index === 0 ? "[&_svg]:bg-transparent" : "[&_svg]:bg-white-normal",
        index > 0 &&
          !last && [
            "py-xxs px-0",
            "bg-[radial-gradient(farthest-side,theme(colors.white.normal),theme(colors.white.normal),theme(colors.white.normal),transparent)]",
          ],
        index > 0 &&
          count > 0 && [
            "before:-z-default before:border-cloud-normal-active before:absolute before:h-[calc(50%+9px)] before:border",
            last && isPrevHidden ? "before:top-[-14px]" : "before:top-[-9px]",
            isPrevHidden ? "before:border-dashed" : "before:border-solid",
          ],
        !last &&
          count > 0 && [
            "after:-z-default after:border-cloud-normal-active after:absolute after:h-[calc(50%+9px)] after:border",
            isHidden
              ? "after:bottom-[4px] after:border-dashed"
              : "after:bottom-[-9px] after:border-solid",
          ],
      )}
    >
      <RenderedIcon type={type} isPrevHidden={isPrevHidden} isLast={last} isHidden={isHidden}>
        {children}
      </RenderedIcon>
    </div>
  );
};

export default ItinerarySegmentStopIcon;
