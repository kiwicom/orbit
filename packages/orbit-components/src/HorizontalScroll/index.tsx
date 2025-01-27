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

const getSnap = (scrollSnap: ScrollSnap) => {
  if (scrollSnap === "mandatory") return "x mandatory";
  if (scrollSnap === "proximity") return "x proximity";

  return scrollSnap;
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

        if (scrollLeft === 0) {
          setReachedStart(true);
        } else {
          setReachedStart(false);
        }

        if (scrollLeft >= scrollWidth) {
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
    }, [handleOverflow, handleResize, scrollWrapperRef.current?.scrollWidth]);

    return (
      <div
        className={cx(
          "orbit-horizontal-scroll relative inline-flex w-full items-center overflow-hidden",
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
          <ArrowButton
            className="left-100"
            isHidden={reachedStart || !isOverflowing}
            onClick={() => handleClick("left")}
          >
            <ChevronBackward customColor={arrowColor} />
          </ArrowButton>
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
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
          >
            <Stack inline spacing={spacing}>
              {children}
            </Stack>
          </div>
        </div>
        {arrows && (
          <ArrowButton
            className="right-100"
            isHidden={reachedEnd || !isOverflowing}
            onClick={() => handleClick("right")}
          >
            <ChevronForward customColor={arrowColor} />
          </ArrowButton>
        )}
      </div>
    );
  },
);

export default HorizontalScroll;
