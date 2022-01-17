import * as React from "react";
import { StyledComponent } from "styled-components";

import * as Common from "../common/common";

export interface Props extends Common.Global {
  readonly title: string;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLElement>>;
}

declare const WizardStep: React.FunctionComponent<Props>;
declare const StyledStepIconContainer: StyledComponent<any, any, HTMLElement>;

export { StyledStepIconContainer };
export default WizardStep;
