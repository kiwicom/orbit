import * as React from "react";

import { SPACINGS } from "../utils/layout/consts";
import { QUERIES } from "../utils/mediaQuery";
import type { MediaQuery } from "./types";

import Inline from ".";

const ALIGN = [undefined, "start", "end", "center"] as const;
const JUSTIFY = [undefined, "start", "end", "center", "between", "around"] as const;

enum QUERIES_BACKGROUNDS {
  mediumMobile = "bg-blue-light",
  largeMobile = "bg-product-light",
  tablet = "bg-green-light",
  desktop = "bg-orange-light",
  largeDesktop = "bg-red-light",
}

const DUMMY_CHILDREN = (
  <>
    <div className="size-50 bg-blue-normal" />
    <div className="size-100 bg-blue-normal" />
    <div className="size-150 bg-blue-normal" />
    <div className="size-200 bg-blue-normal" />
    <div className="size-300 bg-blue-normal" />
    <div className="size-400 bg-blue-normal" />
    <div className="size-500 bg-blue-normal" />
    <div className="size-600 bg-blue-normal" />
    <div className="size-800 bg-blue-normal" />
    <div className="size-1000 bg-blue-normal" />
    <div className="size-1200 bg-blue-normal" />
    <div className="size-1600 bg-blue-normal" />
  </>
);

export default function InlineStory() {
  return (
    <>
      <Inline />
      {Object.values(SPACINGS).map(spacing => (
        <Inline key={spacing} spacing={spacing}>
          {DUMMY_CHILDREN}
        </Inline>
      ))}
      {ALIGN.map(align => (
        <Inline key={align} align={align}>
          {DUMMY_CHILDREN}
        </Inline>
      ))}
      {JUSTIFY.map(justify => (
        <Inline key={justify} justify={justify}>
          {DUMMY_CHILDREN}
        </Inline>
      ))}
      {Object.values(QUERIES).map(query => {
        const propByQuery = (prop: MediaQuery) => ({
          [query]: prop,
        });
        return (
          <div className={QUERIES_BACKGROUNDS[query]}>
            {Object.values(SPACINGS).map(spacing => (
              <Inline key={spacing} {...propByQuery({ spacing })}>
                {DUMMY_CHILDREN}
              </Inline>
            ))}
            {ALIGN.map(align => (
              <Inline key={align} {...propByQuery({ align })}>
                {DUMMY_CHILDREN}
              </Inline>
            ))}
            {JUSTIFY.map(justify => (
              <Inline key={justify} {...propByQuery({ justify })}>
                {DUMMY_CHILDREN}
              </Inline>
            ))}
          </div>
        );
      })}
    </>
  );
}
