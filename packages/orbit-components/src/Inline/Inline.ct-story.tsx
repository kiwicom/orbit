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
    <div className="size-xxxs bg-blue-normal" />
    <div className="size-xxs bg-blue-normal" />
    <div className="size-xs bg-blue-normal" />
    <div className="size-sm bg-blue-normal" />
    <div className="size-md bg-blue-normal" />
    <div className="size-lg bg-blue-normal" />
    <div className="size-xl bg-blue-normal" />
    <div className="size-xxl bg-blue-normal" />
    <div className="size-xxxl bg-blue-normal" />
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
