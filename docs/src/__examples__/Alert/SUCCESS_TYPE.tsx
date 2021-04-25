import * as React from "react";
import { Check } from "@kiwicom/orbit-components/icons";
import { Alert } from "@kiwicom/orbit-components";

export default {
  Example: () => <Alert icon={<Check />} title="Your payment was successful." type="success" />,
  info: {
    title: "Success alert",
    description:
      "Success alerts confirm that an instruction from the user, such as to make a payment or request a refund, was processed successfully. Usually used without an action button.",
  },
};
