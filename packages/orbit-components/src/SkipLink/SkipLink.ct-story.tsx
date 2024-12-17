import * as React from "react";

import SkipLink from ".";

export default function SkipLinkStory() {
  return (
    <div className="p-400 bg-cloud-light">
      <div className="h-1300">
        <SkipLink
          dataTest="SkipLink"
          links={[
            {
              href: "",
              name: "Go go go!",
            },
          ]}
        />
      </div>
    </div>
  );
}
