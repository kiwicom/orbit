import React from "react";

// eslint-disable-next-line import/extensions
import { NAMES } from "./consts.mjs";

import AirportIllustration from ".";

export default function AirportIllustrationStory() {
  return (
    <div className="space-y-300 flex flex-col">
      {NAMES.map(illustration => (
        <div className="bg-white-normal min-h-[80px] w-full">
          <AirportIllustration key={illustration} name={illustration} />
        </div>
      ))}
    </div>
  );
}
