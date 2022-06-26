import React from "react";
import { Alert } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Alert title="Re-check your credentials">
      Re-check your credentials To avoid boarding complications, your entire name must be entered
      exactly as it appears in your passport/ID.
    </Alert>
  ),
  exampleVariants: [
    {
      name: "Success",
      code: `() => <Alert icon={<Icons.Check />} type="success">Your payment was successful.</Alert>`,
    },
    {
      name: "Warning",
      code: `() => <Alert icon={<Icons.Visa />} type="warning" title="Visa requirements check">
      The requirements found here are for reference purposes only. Contact the embassy or your foreign ministry for more information.
      Make sure you know the visa requirements for</Alert>`,
    },
    {
      name: "Critical",
      code: `() => <Alert icon={<Icons.AlertCircle />} type="critical" title="No results loaded">There was an error while processing your request. Refresh the page to load the results.</Alert>`,
    },
  ],
};
