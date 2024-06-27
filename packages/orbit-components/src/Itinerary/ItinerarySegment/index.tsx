"use client";

import * as React from "react";
import cx from "clsx";

import handleKeyDown from "../../utils/handleKeyDown";
import Separator from "../../Separator";
import type { Props } from "./types";
import { ItinerarySegmentProvider } from "./context";
import { spaceAfterClasses } from "../../common/tailwind";

const ItinerarySegment = ({
  children,
  spaceAfter,
  dataTest,
  noElevation,
  actionable = true,
  banner,
  onClick,
  onExpand,
  onCollapse,
}: Props) => {
  const content = React.Children.toArray(children) as React.ReactElement[];

  const [opened, setOpened] = React.useState(false);

  const handleClick = (ev: React.SyntheticEvent<HTMLDivElement>) => {
    ev.stopPropagation();
    if (onClick) onClick(ev);
    if (!opened && onExpand) onExpand(ev);
    if (opened && onCollapse) onCollapse(ev);

    setOpened(prev => !prev);
  };

  const parts = (
    <div
      className="pt-sm"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown(() => setOpened(prev => !prev))}
    >
      {React.Children.map(children, (el, i) => {
        if (!React.isValidElement(el)) return null;

        return (
          <ItinerarySegmentProvider
            index={i}
            opened={opened}
            toggleOpened={ev => {
              if (document && document.getSelection()?.type !== "Range") handleClick(ev);
            }}
            last={i === content.length - 1}
            isNextHidden={Boolean(content[i + 1]?.props?.hidden)}
            isPrevHidden={Boolean(content[i - 1]?.props?.hidden)}
            isBanner={!!banner}
            count={content.length}
            isHidden={!!(el.props && el.props.hidden)}
            noElevation={!!noElevation}
          >
            {el}
          </ItinerarySegmentProvider>
        );
      })}
    </div>
  );

  return (
    <div
      className={cx(
        "rounded-large pb-sm px-0",
        spaceAfter && spaceAfterClasses[spaceAfter],
        !noElevation && "shadow-fixed",
        actionable && !noElevation && "hover:shadow-action-active focus:shadow-action-active",
      )}
      data-test={dataTest}
    >
      {parts}
      {Boolean(banner) && (
        <>
          <Separator spaceAfter="small" />
          {banner}
        </>
      )}
    </div>
  );
};

export default ItinerarySegment;
