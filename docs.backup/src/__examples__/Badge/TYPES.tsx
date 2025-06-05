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
    { name: "infoSubtle", code: `() => <Badge type="infoSubtle">InfoSubtle</Badge>` },
    {
      name: "criticalSubtle",
      code: `() => <Badge type="criticalSubtle">CriticalSubtle</Badge>`,
    },
    {
      name: "successSubtle",
      code: `() => <Badge type="SuccessSubtle">successSubtle</Badge>`,
    },
    {
      name: "warningSubtle",
      code: `() => <Badge type="warningSubtle">WarningSubtle</Badge>`,
    },
    {
      name: "bundleBasic",
      code: `() => <Badge type="bundleBasic">BundleBasic</Badge>`,
    },
    {
      name: "bundleMedium",
      code: `() => <Badge type="bundleMedium">BundleMedium</Badge>`,
    },
    {
      name: "bundleTop",
      code: `() => <Badge type="bundleTop">BundleTop</Badge>`,
    },
  ],
};
