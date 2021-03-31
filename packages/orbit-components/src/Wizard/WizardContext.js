// @flow
import * as React from "react";

import type { WizardStepContextValue } from "./WizardContext";

export const WizardStepContext: React.Context<WizardStepContextValue> = React.createContext<WizardStepContextValue>(
  {
    index: 0,
    status: "disabled",
    nextStepStatus: "disabled",
    isCompact: false,
    isActive: false,
    onChangeStep: () => {},
  },
);
