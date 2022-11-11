import * as React from "react";

import createIcon from "../Icon/createIcon";
import { Props } from "../Icon/types";

/** modified version of Orbit's CheckCircle icon, so that we can make the checkmark white instead being a hole */

const CheckCircle: React.ComponentType<Props> = createIcon(
  <>
    <circle cx="11.999" cy="12" r="12" />
    <path
      d="M7.734,12.802c-0.204,-0.214 -0.486,-0.335 -0.781,-0.335c-0.593,-0 -1.08,0.487 -1.08,1.08c0,0.277 0.107,0.545 0.298,0.745l3.087,3.294c0.442,0.462 1.186,0.443 1.602,-0.043l6.709,-8.445c0.165,-0.194 0.255,-0.441 0.255,-0.696c-0,-0.592 -0.487,-1.08 -1.08,-1.08c-0.312,0 -0.611,0.136 -0.815,0.372l-5.586,7.096c-0.091,0.115 -0.23,0.182 -0.377,0.182c-0.133,0 -0.261,-0.055 -0.351,-0.152l-1.881,-2.018Z"
      fill="#fff"
    />
  </>,
  "0 0 24 24",
  "CheckCircle",
);

export default CheckCircle;
