"use client";

import * as React from "react";
import cx from "clsx";

import Stack from "../../Stack";
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
  onClick,
  banner,
}: Props) => {
  const content = React.Children.toArray(children) as React.ReactElement[];

  const [opened, setOpened] = React.useState(false);

  const parts = (
    <Stack direction="column" spacing="none">
      {React.Children.map(children, (el, i) => {
        if (!React.isValidElement(el)) return null;

        return (
          <ItinerarySegmentProvider
            index={i}
            opened={opened}
            toggleOpened={() => {
              if (document && document.getSelection()?.type !== "Range") setOpened(prev => !prev);
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
    </Stack>
  );

  const handleClick = (ev: React.SyntheticEvent<HTMLDivElement>) => {
    if (onClick) onClick(ev);
    setOpened(prev => !prev);
  };

  return (
    <div
      className={cx(
        "rounded-large py-sm px-0",
        actionable && "cursor-pointer",
        spaceAfter && spaceAfterClasses[spaceAfter],
        !noElevation && "shadow-fixed",
        actionable && !noElevation && "hover:shadow-action-active focus:shadow-action-active",
      )}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown(() => setOpened(prev => !prev))}
      onClick={handleClick}
      data-test={dataTest}
    >
      {parts}
      {Boolean(banner) && <Separator spaceAfter="small" />}
      {banner}
    </div>
  );
};

export default ItinerarySegment;
