import * as React from "react";

export type Status = "available" | "completed" | "disabled";

export interface WizardStepContextValue {
  index: number;
  status: Status;
  isColumnOnDesktop: boolean;
  nextStepStatus: Status;
  isCompact: boolean;
  isLastStep: boolean;
  isActive: boolean;
  onChangeStep?: (stepIndex: number) => void | Promise<any>;
  onClose: () => void;
}

export const WizardStepContext = React.createContext<WizardStepContextValue>({
  index: 0,
  status: "disabled",
  nextStepStatus: "disabled",
  isColumnOnDesktop: false,
  isCompact: false,
  isLastStep: false,
  isActive: false,
  onChangeStep: () => {},
  onClose: () => {},
});
