import * as React from "react";

import RandomIdProvider from "../../OrbitProvider/RandomId/Provider";

import MobileDialog from ".";

export function MobileDialogDefault(): React.ReactNode {
  return (
    <RandomIdProvider useId={React.useId}>
      <div className="h-screen">
        <MobileDialog content={<div>Content</div>}>
          <button type="button" data-test="button">
            Click me
          </button>
        </MobileDialog>
      </div>
    </RandomIdProvider>
  );
}

export function MobileDialogDisabled(): React.ReactNode {
  return (
    <RandomIdProvider useId={React.useId}>
      <div className="h-screen">
        <MobileDialog content={<div>Content</div>} enabled={false}>
          <button type="button">Click me</button>
        </MobileDialog>
      </div>
    </RandomIdProvider>
  );
}
