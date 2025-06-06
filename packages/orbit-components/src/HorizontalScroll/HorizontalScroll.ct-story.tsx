import React from "react";

import { SPACINGS } from "../utils/layout/consts";

import HorizontalScroll from ".";

export default function HorizontalScrollVisualStory() {
  const children = [
    "Haystack",
    "Haystack",
    "Haystack",
    "Haystack",
    "Haystack",
    "Haystack",
    "Haystack",
    "Haystack",
    "Haystack",
    "Kiwi",
    "Needle",
    "Needle",
    "Needle",
    "Needle",
  ].map((txt, key) => (
    <div
      // eslint-disable-next-line react/no-array-index-key -- okay in constants
      key={key}
      className="rounded-150 h-form-box-normal px-400 bg-product-normal text-white-foreground font-base flex items-center justify-center"
    >
      {txt}
    </div>
  ));

  return (
    <div className="space-y-200 flex flex-col">
      {Object.values(SPACINGS).map(spacing => (
        <HorizontalScroll spacing={spacing}>{children}</HorizontalScroll>
      ))}

      <HorizontalScroll overflowElevation elevationColor="paletteWhite">
        {children}
      </HorizontalScroll>

      <HorizontalScroll
        arrows
        arrowColor="black"
        arrowLeftAriaLabel="Scroll left"
        arrowRightAriaLabel="Scroll right"
      >
        {children}
      </HorizontalScroll>

      <HorizontalScroll
        overflowElevation
        elevationColor="paletteWhite"
        arrows
        arrowColor="magenta"
        arrowLeftAriaLabel="Scroll left"
        arrowRightAriaLabel="Scroll right"
      >
        {children}
      </HorizontalScroll>
    </div>
  );
}
