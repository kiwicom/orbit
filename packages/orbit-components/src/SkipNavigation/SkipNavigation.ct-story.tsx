import * as React from "react";

import SkipNavigation from ".";

export default function SkipNavigationStory() {
  return (
    <div className="p-md">
      <div className="border border-solid">
        <SkipNavigation
          dataTest="SkipNavigation"
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
