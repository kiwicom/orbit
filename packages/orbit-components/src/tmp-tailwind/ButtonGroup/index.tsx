import * as React from "react";

import type { Props } from "../../ButtonGroup/types";

const ButtonGroup = ({ children, dataTest }: Props) => (
  <div
    data-test={dataTest}
    className="tb:first:[&>.orbit-button-primitive]:rounded-s-normal tb:last:[&>.orbit-button-primitive]:rounded-e-normal flex space-x-px rtl:space-x-reverse [&>.orbit-button-primitive]:rounded-none first:[&>.orbit-button-primitive]:rounded-s-[6px] last:[&>.orbit-button-primitive]:rounded-e-[6px]"
  >
    {children}
  </div>
);

export default ButtonGroup;
