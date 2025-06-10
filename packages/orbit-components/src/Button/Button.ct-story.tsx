import React from "react";

import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import * as Icons from "../icons";

import Button from ".";

export default function ButtonVisualStory() {
  return (
    <div className="space-y-300 flex-col items-start">
      <div className="gap-300 flex flex-wrap items-center">
        {Object.values(TYPE_OPTIONS).map(type => (
          <Button
            iconLeft={<Icons.Airplane ariaHidden />}
            iconRight={<Icons.ChevronDown ariaHidden />}
            key={type}
            type={type}
          >
            {type}
          </Button>
        ))}
      </div>

      <div className="gap-300 flex flex-wrap items-center">
        {Object.values(TYPE_OPTIONS).map(type => (
          <Button
            iconLeft={<Icons.Airplane ariaHidden />}
            iconRight={<Icons.ChevronDown ariaHidden />}
            key={type}
            type={type}
            loading
          >
            {type}
          </Button>
        ))}
      </div>

      <div className="gap-300 flex flex-wrap items-center">
        {Object.values(TYPE_OPTIONS).map(type => (
          <Button
            iconLeft={<Icons.Airplane ariaHidden />}
            iconRight={<Icons.ChevronDown ariaHidden />}
            key={type}
            type={type}
            disabled
          >
            {type}
          </Button>
        ))}
      </div>

      <div className="gap-300 flex flex-wrap">
        {Object.values(SIZE_OPTIONS).map(size => (
          <Button
            iconLeft={<Icons.Airplane ariaHidden />}
            iconRight={<Icons.ChevronDown ariaHidden />}
            key={size}
            size={size}
          >
            {size}
          </Button>
        ))}
      </div>

      <div className="gap-300 flex flex-wrap items-start">
        {Object.values(SIZE_OPTIONS).map(size => (
          <Button
            iconLeft={<Icons.Airplane ariaHidden />}
            iconRight={<Icons.ChevronDown ariaHidden />}
            key={size}
            size={size}
            loading
          >
            {size}
          </Button>
        ))}
      </div>

      <div className="gap-300 flex flex-wrap items-center">
        <Button iconLeft={<Icons.Airplane ariaHidden />}>Button</Button>
        <Button iconRight={<Icons.ChevronDown ariaHidden />}>Button</Button>
        <Button
          iconLeft={<Icons.Airplane ariaHidden />}
          iconRight={<Icons.ChevronDown ariaHidden />}
        >
          Button
        </Button>
        <Button iconLeft={<Icons.Airplane ariaHidden />} />
      </div>

      <div className="gap-300 flex flex-wrap items-center">
        <Button circled iconLeft={<Icons.Airplane ariaHidden />}>
          Button
        </Button>
        <Button circled iconLeft={<Icons.Airplane ariaHidden />} />
      </div>

      <Button fullWidth iconLeft={<Icons.Airplane ariaHidden />}>
        Button
      </Button>
      <Button fullWidth iconRight={<Icons.ChevronDown ariaHidden />}>
        Button
      </Button>
      <Button
        fullWidth
        iconLeft={<Icons.Airplane ariaHidden />}
        iconRight={<Icons.ChevronDown ariaHidden />}
      >
        Button
      </Button>
      <Button
        fullWidth
        centered
        iconLeft={<Icons.Airplane ariaHidden />}
        iconRight={<Icons.ChevronDown ariaHidden />}
      >
        Button
      </Button>
    </div>
  );
}
