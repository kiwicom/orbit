import React from "react";

import { TYPES } from "./consts";
import { SIZE_OPTIONS } from "../primitives/ButtonPrimitive/common/consts";
import Airplane from "../icons/Airplane";
import ChevronDown from "../icons/ChevronDown";

import ButtonLink from ".";

export default function ButtonLinkVisualStory() {
  return (
    <div className="gap-300 flex flex-col">
      <div className="gap-300 flex flex-wrap">
        {Object.values(TYPES).map(type => (
          <ButtonLink
            iconLeft={<Airplane ariaHidden />}
            iconRight={<ChevronDown ariaHidden />}
            key={type}
            type={type}
          >
            {type}
          </ButtonLink>
        ))}
      </div>

      <div className="gap-300 flex flex-wrap">
        {Object.values(SIZE_OPTIONS).map(size => (
          <ButtonLink
            iconLeft={<Airplane ariaHidden />}
            iconRight={<ChevronDown ariaHidden />}
            key={size}
            size={size}
          >
            {size}
          </ButtonLink>
        ))}
      </div>

      <div className="gap-300 flex flex-wrap">
        <ButtonLink iconLeft={<Airplane ariaHidden />}>Button link</ButtonLink>
        <ButtonLink iconRight={<ChevronDown ariaHidden />}>Button link</ButtonLink>
        <ButtonLink iconLeft={<Airplane ariaHidden />} iconRight={<ChevronDown ariaHidden />}>
          Button link
        </ButtonLink>
        <ButtonLink iconLeft={<Airplane ariaHidden />} />
      </div>

      <div className="gap-300 flex flex-wrap">
        <ButtonLink circled iconLeft={<Airplane ariaHidden />}>
          Button link
        </ButtonLink>
        <ButtonLink circled iconLeft={<Airplane ariaHidden />} />
      </div>

      <ButtonLink fullWidth iconLeft={<Airplane ariaHidden />}>
        Button link
      </ButtonLink>
      <ButtonLink fullWidth iconRight={<ChevronDown ariaHidden />}>
        Button link
      </ButtonLink>
      <ButtonLink
        fullWidth
        iconLeft={<Airplane ariaHidden />}
        iconRight={<ChevronDown ariaHidden />}
      >
        Button link
      </ButtonLink>
      <ButtonLink
        fullWidth
        centered
        iconLeft={<Airplane ariaHidden />}
        iconRight={<ChevronDown ariaHidden />}
      >
        Button link
      </ButtonLink>
    </div>
  );
}
