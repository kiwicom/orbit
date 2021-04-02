import * as React from "react";
import { Alert, Stack, Text, AlertButton } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
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
