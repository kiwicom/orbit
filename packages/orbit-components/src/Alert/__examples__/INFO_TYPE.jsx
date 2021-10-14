// @flow
import * as React from "react";

import Alert, { AlertButton } from "../index";
import Stack from "../../Stack";
import Text from "../../Text";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
    <Alert icon={<Icons.InformationCircle />} title="Re-check your credentials">
      <Stack spacing="small">
        <Text>
          To avoid boarding complications, your entire name must be entered{" "}
          <strong>exactly as it appears in your passport/ID</strong>.
        </Text>
        <AlertButton type="info">More info</AlertButton>
      </Stack>
    </Alert>
  ),
  info: {
    title: "Informational alert",
    description:
      "Informational alerts are the most common alerts. Use them to guide a user's attention to relevant details, but keep it focused and related to the topic on the screen.",
  },
};
