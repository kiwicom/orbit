import * as React from "react";

import SkipNavigation from ".";

interface Props {
  isInNav?: boolean;
}

export default function SkipNavigationStory({ isInNav }: Props) {
  return (
    <div className="p-400">
      <div className={`border border-solid ${isInNav ? "bg-white-normal" : ""}`}>
        <SkipNavigation
          dataTest="SkipNavigation"
          isInNav={isInNav}
          firstSectionLabel={isInNav ? "Section" : "Jump to section"}
          firstActionLabel={isInNav ? "Action" : "Common actions"}
          actions={[
            {
              name: "Go to terms and conditions",
            },
            {
              name: "Add baggage",
            },
            {
              name: "Request refund",
            },
          ]}
          feedbackUrl="#"
          feedbackLabel="Send feedback"
        />
      </div>
    </div>
  );
}
