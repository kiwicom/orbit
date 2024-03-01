import * as React from "react";

import SkipLink from ".";

export default function SkipLinkStory() {
  return (
    <div className="p-md bg-cloud-light">
      <div className="h-xxxl">
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
