"use client";

import * as React from "react";
import cx from "clsx";

import Stack from "../Stack";
import mergeRefs from "../utils/mergeRefs";
import useTheme from "../hooks/useTheme";
import useScrollBox from "./useScroll";
import ChevronBackward from "../icons/ChevronBackward";
import ChevronForward from "../icons/ChevronForward";
import type { Props, ScrollSnap } from "./types";
import { DEPRECATED_SPACINGS, SPACINGS } from "../utils/layout/consts";

const getSnap = (scrollSnap: ScrollSnap) => {
  if (scrollSnap === "mandatory") return "x mandatory";
  if (scrollSnap === "proximity") return "x proximity";

  return scrollSnap;
};

const getTriggerOffset = (spacing: string) => {
  const spacingValues = {
    [SPACINGS.NONE]: 0,
    [SPACINGS.FIFTY]: 2,
    [SPACINGS.ONE_HUNDRED]: 4,
    [SPACINGS.ONE_HUNDRED_FIFTY]: 6,
    [SPACINGS.TWO_HUNDRED]: 8,
    [SPACINGS.THREE_HUNDRED]: 12,
    [SPACINGS.FOUR_HUNDRED]: 16,
    [SPACINGS.FIVE_HUNDRED]: 20,
    [SPACINGS.SIX_HUNDRED]: 24,
    [SPACINGS.EIGHT_HUNDRED]: 32,
    [SPACINGS.ONE_THOUSAND]: 40,
    [SPACINGS.ONE_THOUSAND_TWO_HUNDRED]: 48,
    [SPACINGS.ONE_THOUSAND_SIX_HUNDRED]: 64,
    [DEPRECATED_SPACINGS.XXXSMALL]: 2, // DEPRECATED
    [DEPRECATED_SPACINGS.XXSMALL]: 4, // DEPRECATED
    [DEPRECATED_SPACINGS.XSMALL]: 8, // DEPRECATED
    [DEPRECATED_SPACINGS.SMALL]: 12, // DEPRECATED
    [DEPRECATED_SPACINGS.MEDIUM]: 16, // DEPRECATED
    [DEPRECATED_SPACINGS.LARGE]: 24, // DEPRECATED
    [DEPRECATED_SPACINGS.XLARGE]: 32, // DEPRECATED
    [DEPRECATED_SPACINGS.XXLARGE]: 40, // DEPRECATED
    [DEPRECATED_SPACINGS.XXXLARGE]: 52, // DEPRECATED
  };

  return spacingValues[spacing];
};

const ArrowButton = ({
  children,
  className,
  isHidden,
  onClick,
}: React.PropsWithChildren<{
  className: string;
  isHidden: boolean;
  onClick: () => void;
}>) => {
  return (
    <button
      className={cx(
        "z-default absolute flex h-full items-center",
        isHidden && "invisible",
        className,
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

const ElevationHaze = ({ className, style }: { className: string; style: React.CSSProperties }) => {
  return <div className={cx("z-default absolute top-0 h-full", className)} style={style} />;
};

const HorizontalScroll = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      spacing = "300",
      arrows,
      scrollSnap = "none",
      onOverflow,
      elevationColor = "paletteCloudDark",
      arrowColor,
      overflowElevation,
      scrollPadding,
      dataTest,
      id,
      minHeight,
    },
    ref,
  ) => {
    const scrollWrapperRef = React.useRef<HTMLDivElement>(null);
    const [isOverflowing, setOverflowing] = React.useState(false);
    const [reachedStart, setReachedStart] = React.useState(true);
    const [reachedEnd, setReachedEnd] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { isDragging } = useScrollBox(scrollWrapperRef);
    const theme = useTheme();
    const scrollEl = scrollWrapperRef.current;

    const TRIGGER_OFFSET = getTriggerOffset(spacing);

    const handleOverflow = React.useCallback(() => {
      if (scrollWrapperRef.current?.scrollWidth && containerRef.current?.offsetWidth) {
        const { scrollWidth: containerScrollWidth } = scrollWrapperRef.current;
        const { offsetWidth } = containerRef.current;

        if (containerScrollWidth > offsetWidth) {
          setOverflowing(true);
          if (onOverflow) onOverflow();
        } else {
          setOverflowing(false);
        }
      }
    }, [onOverflow]);

    const handleClick = (direction: "left" | "right") => {
      if (scrollEl) {
        const { scrollLeft, offsetWidth } = scrollEl;
        const scrollAmount =
          scrollLeft + (direction === "left" ? -offsetWidth / 2 : offsetWidth / 2);
        scrollEl.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    };

    const handleScroll = React.useCallback(() => {
      if (scrollEl) {
        const scrollWidth = scrollEl.scrollWidth - scrollEl.clientWidth;
        const { scrollLeft } = scrollEl;
        if (scrollLeft - TRIGGER_OFFSET <= 0) {
          setReachedStart(true);
        } else {
          setReachedStart(false);
        }

        if (scrollLeft + TRIGGER_OFFSET >= scrollWidth) {
          setReachedEnd(true);
        } else {
          setReachedEnd(false);
        }
      }
    }, [scrollEl]);

    const handleResize = React.useCallback(() => {
      handleOverflow();
      handleScroll();
    }, [handleOverflow, handleScroll]);

    React.useEffect(() => {
      handleOverflow();

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [handleOverflow, handleResize]);

    return (
      <div
        className={cx(
          "relative inline-flex w-full items-center overflow-hidden",
          isOverflowing && (isDragging ? "cursor-grabbing" : "cursor-grab"),
        )}
        data-test={dataTest}
        id={id}
        ref={mergeRefs<HTMLDivElement>([ref, containerRef])}
        style={{ minHeight }}
      >
        {overflowElevation && (
          <>
            <ElevationHaze
              className={cx("left-0", (!isOverflowing || reachedStart) && "invisible")}
              style={{ boxShadow: `5px 0px 20px 20px ${theme.orbit[elevationColor]}` }}
            />
            <ElevationHaze
              className={cx("right-0", (!isOverflowing || reachedEnd) && "invisible")}
              style={{ boxShadow: `-5px 0px 20px 20px ${theme.orbit[elevationColor]}` }}
            />
          </>
        )}
        {arrows && (
          <>
            <ArrowButton
              className="left-100"
              isHidden={reachedStart || !isOverflowing}
              onClick={() => handleClick("left")}
            >
              <ChevronBackward customColor={arrowColor} />
            </ArrowButton>
            <ArrowButton
              className="right-100"
              isHidden={reachedEnd || !isOverflowing}
              onClick={() => handleClick("right")}
            >
              <ChevronForward customColor={arrowColor} />
            </ArrowButton>
          </>
        )}
        <div
          className="scrollbar-none size-full overflow-x-auto overflow-y-hidden"
          ref={scrollWrapperRef}
          onScroll={handleScroll}
          style={{
            scrollPadding,
            scrollSnapType: isDragging ? "none" : getSnap(scrollSnap),
          }}
        >
          <div
            className={cx("relative inline-flex size-full", isDragging && "pointer-events-none")}
          >
            <Stack inline spacing={spacing}>
              {children}
            </Stack>
          </div>
        </div>
      </div>
    );
  },
);

export default HorizontalScroll;
