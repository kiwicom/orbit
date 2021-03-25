// @flow
import * as React from "react";

import Coupon from "../index";
import Text from "../../Text";

export default {
  Example: (): React.Node => (
    <Text>
      Use
      <Coupon>Baggagefree</Coupon>
      when booking to add free baggage.
    </Text>
  ),
  info: {
    title: "Default coupon",
    description:
      "Coupons render their child text as a <code>&lt;mark&gt;</code> element styled as all caps.",
  },
};
