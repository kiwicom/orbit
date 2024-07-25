"use client";

import * as React from "react";

import KEY_CODE_MAP from "../common/keyMaps";
import type { Props } from "./types";

const SkipLink = ({ links, buttonLabel, dataTest, id }: Props) => {
  return (
    <nav aria-label={buttonLabel} data-test={dataTest} id={id}>
      {links &&
        links.map(({ href, name, onClick }, index) => {
          return (
            <a
              className="orbit-skip-link ltr:left-md rtl:right-md top-md p-md bg-white-normal z-onTop font-base text-large rounded-100 text-ink-dark absolute underline [&:not(:focus)]:sr-only"
              key={encodeURIComponent(name + index)}
              href={href}
              tabIndex={onClick && 0}
              role={href ? "link" : "button"}
              onClick={onClick}
              onKeyDown={ev => {
                if (ev.keyCode === KEY_CODE_MAP.ENTER && onClick) {
                  onClick(ev);
                }
              }}
            >
              {name}
            </a>
          );
        })}
    </nav>
  );
};

export default SkipLink;
