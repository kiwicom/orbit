import React from "react";
import { Coupon, Text } from "@kiwicom/orbit-components";

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
    description:
      "Coupons render their child text as a <code>&lt;mark&gt;</code> element styled as all caps.",
  },
};
