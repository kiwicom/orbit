import React from "react";

import { TYPES } from "./consts";
import { SIZE_OPTIONS } from "../primitives/ButtonPrimitive/common/consts";
import Airplane from "../icons/Airplane";
import ChevronDown from "../icons/ChevronDown";

import ButtonLink from ".";

export default function ButtonLinkVisualStory() {
  return (
    <div className="gap-sm flex flex-col">
      <div className="gap-sm flex flex-wrap">
        {Object.values(TYPES).map(type => (
          <ButtonLink iconLeft={<Airplane />} iconRight={<ChevronDown />} key={type} type={type}>
            {type}
          </ButtonLink>
        ))}
      </div>

      <div className="gap-sm flex flex-wrap">
        {Object.values(SIZE_OPTIONS).map(size => (
          <ButtonLink iconLeft={<Airplane />} iconRight={<ChevronDown />} key={size} size={size}>
            {size}
          </ButtonLink>
        ))}
      </div>

      <div className="gap-sm flex flex-wrap">
        <ButtonLink iconLeft={<Airplane />}>Button link</ButtonLink>
        <ButtonLink iconRight={<ChevronDown />}>Button link</ButtonLink>
        <ButtonLink iconLeft={<Airplane />} iconRight={<ChevronDown />}>
          Button link
        </ButtonLink>
        <ButtonLink iconLeft={<Airplane />} />
      </div>

      <div className="gap-sm flex flex-wrap">
        <ButtonLink circled iconLeft={<Airplane />}>
          Button link
        </ButtonLink>
        <ButtonLink circled iconLeft={<Airplane />} />
      </div>

      <ButtonLink fullWidth iconLeft={<Airplane />}>
        Button link
      </ButtonLink>
      <ButtonLink fullWidth iconRight={<ChevronDown />}>
        Button link
      </ButtonLink>
      <ButtonLink fullWidth iconLeft={<Airplane />} iconRight={<ChevronDown />}>
        Button link
      </ButtonLink>
      <ButtonLink fullWidth centered iconLeft={<Airplane />} iconRight={<ChevronDown />}>
        Button link
      </ButtonLink>
    </div>
  );
}
