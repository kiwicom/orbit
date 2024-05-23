import * as React from "react";

import { NAME_OPTIONS, SIZE_OPTIONS } from "./consts";

import ServiceLogo from ".";

const GRAYSCALE_OPTIONS = [false, true];

export default function ServiceLogoStory() {
  return (
    <div className="p-md gap-md flex flex-wrap items-center [&_img]:shrink-0">
      {GRAYSCALE_OPTIONS.map(grayScale => (
        <ServiceLogo name="Alipay" grayScale={grayScale} />
      ))}
      {Object.values(SIZE_OPTIONS).map(size => (
        <ServiceLogo name="Amex" size={size} />
      ))}
      {Object.values(NAME_OPTIONS).map(name => (
        <ServiceLogo name={name} />
      ))}
    </div>
  );
}
