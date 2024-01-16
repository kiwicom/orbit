import React from "react";

import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import * as Icons from "../icons";

import Button from ".";

export default function ButtonVisualStory() {
  return (
    <div className="space-y-sm flex-col items-start">
      <div className="gap-sm flex flex-wrap items-center">
        {Object.values(TYPE_OPTIONS).map(type => (
          <Button
            iconLeft={<Icons.Airplane />}
            iconRight={<Icons.ChevronDown />}
            key={type}
            type={type}
          >
            {type}
          </Button>
        ))}
      </div>

      <div className="gap-sm flex flex-wrap items-center">
        {Object.values(TYPE_OPTIONS).map(type => (
          <Button
            iconLeft={<Icons.Airplane />}
            iconRight={<Icons.ChevronDown />}
            key={type}
            type={type}
            loading
          >
            {type}
          </Button>
        ))}
      </div>

      <div className="gap-sm flex flex-wrap items-center">
        {Object.values(TYPE_OPTIONS).map(type => (
          <Button
            iconLeft={<Icons.Airplane />}
            iconRight={<Icons.ChevronDown />}
            key={type}
            type={type}
            disabled
          >
            {type}
          </Button>
        ))}
      </div>

      <div className="gap-sm flex flex-wrap">
        {Object.values(SIZE_OPTIONS).map(size => (
          <Button
            iconLeft={<Icons.Airplane />}
            iconRight={<Icons.ChevronDown />}
            key={size}
            size={size}
          >
            {size}
          </Button>
        ))}
      </div>

      <div className="gap-sm flex flex-wrap items-start">
        {Object.values(SIZE_OPTIONS).map(size => (
          <Button
            iconLeft={<Icons.Airplane />}
            iconRight={<Icons.ChevronDown />}
            key={size}
            size={size}
            loading
          >
            {size}
          </Button>
        ))}
      </div>

      <div className="gap-sm flex flex-wrap items-center">
        <Button iconLeft={<Icons.Airplane />}>Button</Button>
        <Button iconRight={<Icons.ChevronDown />}>Button</Button>
        <Button iconLeft={<Icons.Airplane />} iconRight={<Icons.ChevronDown />}>
          Button
        </Button>
        <Button iconLeft={<Icons.Airplane />} />
      </div>

      <div className="gap-sm flex flex-wrap items-center">
        <Button circled iconLeft={<Icons.Airplane />}>
          Button
        </Button>
        <Button circled iconLeft={<Icons.Airplane />} />
      </div>

      <Button fullWidth iconLeft={<Icons.Airplane />}>
        Button
      </Button>
      <Button fullWidth iconRight={<Icons.ChevronDown />}>
        Button
      </Button>
      <Button fullWidth iconLeft={<Icons.Airplane />} iconRight={<Icons.ChevronDown />}>
        Button
      </Button>
      <Button fullWidth centered iconLeft={<Icons.Airplane />} iconRight={<Icons.ChevronDown />}>
        Button
      </Button>
    </div>
  );
}
