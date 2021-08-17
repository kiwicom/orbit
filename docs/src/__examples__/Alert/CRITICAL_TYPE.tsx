import React from "react";
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
};
