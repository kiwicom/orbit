import React from "react";
import { Badge } from "@kiwicom/orbit-components";

export default {
  Example: () => <Badge type="neutral">Neutral</Badge>,
  exampleVariants: [
    { name: "Neutral", code: `() => <Badge type="neutral">Neutral</Badge>` },
    { name: "Dark", code: `() => <Badge type="dark">Dark</Badge>` },
    { name: "Info", code: `() => <Badge type="info">Info</Badge>` },
    { name: "Success", code: `() => <Badge type="success">success</Badge>` },
    { name: "Warning", code: `() => <Badge type="warning">Warning</Badge>` },
    { name: "Critical", code: `() => <Badge type="critical">Critical</Badge>` },
    { name: "infoInverted", code: `() => <Badge type="infoInverted">InfoInverted</Badge>` },
    {
      name: "criticalInverted",
      code: `() => <Badge type="criticalInverted">CriticalInverted</Badge>`,
    },
    {
      name: "successInverted",
      code: `() => <Badge type="SuccessInverted">successInverted</Badge>`,
    },
    {
      name: "warningInverted",
      code: `() => <Badge type="warningInverted">WarningInverted</Badge>`,
    },
  ],
};
