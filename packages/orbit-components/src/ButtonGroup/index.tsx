import * as React from "react";

import type { Props } from "./types";

const ButtonGroup = ({ children, dataTest }: Props) => (
  <div
    data-test={dataTest}
    className="tb:first:[&>.orbit-button-primitive]:rounded-s-100 tb:last:[&>.orbit-button-primitive]:rounded-e-100 first:[&>.orbit-button-primitive]:rounded-s-150 last:[&>.orbit-button-primitive]:rounded-e-150 flex space-x-px rtl:space-x-reverse [&>.orbit-button-primitive]:rounded-none"
  >
    {children}
  </div>
);

export default ButtonGroup;
