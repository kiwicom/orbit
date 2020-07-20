// @flow
import * as React from "react";

import Coupon from "../index";
import Text from "../../Text";

export default {
  Example: () => (
    <Text>
      Use
      <Coupon>Baggagefree</Coupon>
      when booking to add free baggage.
    </Text>
  ),
  info: {
    title: "Default coupon",
    description: "Coupons render their child text as a <mark> element styled as all caps.",
  },
};
