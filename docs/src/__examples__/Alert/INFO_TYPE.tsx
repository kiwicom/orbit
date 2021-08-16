import * as React from "react";
import { Alert, Stack, Text, AlertButton } from "@kiwicom/orbit-components";
import { InformationCircle } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Alert icon={<InformationCircle />} title="Re-check your credentials">
      <Stack spacing="small">
        <Text>
          To avoid boarding complications, your entire name must be entered{" "}
          <strong>exactly as it appears in your passport/ID</strong>.
        </Text>
        <AlertButton type="info">More info</AlertButton>
      </Stack>
    </Alert>
  ),
};
