import React from "react";

// eslint-disable-next-line import/extensions
import { NAMES } from "./consts.mjs";

import AirportIllustration from ".";

export default function AirportIllustrationStory() {
  return (
    <div className="space-y-sm flex flex-col">
      {NAMES.map(illustration => (
        /* eslint-disable-next-line tailwindcss/no-custom-classname */
        <div className="bg-white-normal min-h-20 w-full">
          <AirportIllustration key={illustration} name={illustration} />
        </div>
      ))}
    </div>
  );
}
