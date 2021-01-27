import * as React from "react";

import * as Common from "../common/common";

export interface Props extends Common.Global {
  readonly title: string;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLElement>>;
}

declare const WizardStep: React.FunctionComponent<Props>;
export default WizardStep;
