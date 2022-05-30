// @flow
import * as React from "react";

import type { WizardStepContextValue } from "./WizardContext";

export const WizardStepContext: React.Context<WizardStepContextValue> = React.createContext<WizardStepContextValue>(
  {
    index: 0,
    status: "disabled",
    nextStepStatus: "disabled",
    isColumnOnDesktop: false,
    isCompact: false,
    isLastStep: false,
    isActive: false,
    onChangeStep: () => {},
    onClose: () => {},
  },
);
