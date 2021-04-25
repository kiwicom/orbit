import * as React from "react";
import { Stack, Text, Alert, AlertButton } from "@kiwicom/orbit-components";
import { AlertCircle, Reload } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Alert icon={<AlertCircle />} title="No results loaded" type="critical">
      <Stack spacing="small">
        <Text>
          There was an error while processing your request. Refresh the page to load the results.
        </Text>
        <Stack flex spacing="small">
          <AlertButton iconLeft={<Reload />} type="critical">
            Refresh page
          </AlertButton>
          <AlertButton type="criticalSubtle">Contact support</AlertButton>
        </Stack>
      </Stack>
    </Alert>
  ),
  info: {
    title: "Critical alert",
    description:
      "Use critical alerts when something is blocking users from continuing or an issue needs to be resolved immediately. The alert should offer a solution to the problem.",
  },
};
