import * as React from "react";
import { Check } from "@kiwicom/orbit-components/icons";
import { Alert } from "@kiwicom/orbit-components";

export default {
  Example: () => <Alert icon={<Check />} title="Your payment was successful." type="success" />,
};
