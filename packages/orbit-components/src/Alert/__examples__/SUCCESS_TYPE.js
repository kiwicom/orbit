// @flow
import * as React from "react";

import Alert from "../index";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
    <Alert icon={<Icons.Check />} title="Your payment was successful." type="success" />
  ),
  info: {
    title: "Success alert",
    description:
      "Success alerts confirm that an instruction from the user, such as to make a payment or request a refund, was processed successfully. Usually used without an action button.",
  },
};
