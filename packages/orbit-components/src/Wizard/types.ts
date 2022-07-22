import * as React from "react";

import * as Common from "../common/types";

export interface Props extends Common.Globals {
  readonly id: string;
  readonly direction?: "row" | "column";
  readonly completedSteps: number;
  readonly activeStep: number;
  readonly lockScrolling?: boolean;
  readonly onChangeStep?: (stepIndex: number) => void | Promise<any>;
  readonly children: React.ReactNode;
}

export interface WizardStepProps extends Common.Globals {
  readonly title: string;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLElement>>;
}
