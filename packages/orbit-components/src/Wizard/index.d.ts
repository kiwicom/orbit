import * as React from "react";

import * as Common from "../common/common";
import WizardStep from "./WizardStep";

export interface Props extends Common.Global {
  readonly id: string;
  readonly completedSteps: number;
  readonly activeStep: number;
  readonly onChangeStep?: (stepIndex: number) => void | Promise<any>;
  readonly children: React.ReactNode;
}

declare const Wizard: React.FunctionComponent<Props>;
export default Wizard;
export { WizardStep };
