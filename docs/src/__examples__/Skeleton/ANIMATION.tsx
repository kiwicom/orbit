import React from "react";
import { Skeleton } from "@kiwicom/orbit-components";

const COLORS = [
  "blueDark",
  "blueDarkActive",
  "blueDarker",
  "blueDarkHover",
  "blueLight",
  "blueLightActive",
  "blueLightHover",
  "blueNormal",
  "blueNormalActive",
  "blueNormalHover",
  "cloudDark",
  "cloudLight",
  "cloudLightActive",
  "cloudLightHover",
  "cloudNormal",
  "cloudNormalActive",
  "cloudNormalHover",
  "greenDark",
  "greenDarkActive",
  "greenDarker",
  "greenDarkHover",
  "greenLight",
  "greenLightActive",
  "greenLightHover",
  "greenNormal",
  "greenNormalActive",
  "greenNormalHover",
  "inkLight",
  "inkLightActive",
  "inkLighter",
  "inkLighterActive",
  "inkLighterHover",
  "inkLightHover",
  "inkNormal",
  "inkNormalActive",
  "inkNormalHover",
  "orangeDark",
  "orangeDarkActive",
  "orangeDarker",
  "orangeDarkHover",
  "orangeLight",
  "orangeLightActive",
  "orangeLightHover",
  "orangeNormal",
  "orangeNormalActive",
  "orangeNormalHover",
  "productDark",
  "productDarkActive",
  "productDarker",
  "productDarkHover",
  "productLight",
  "productLightActive",
  "productLightHover",
  "productNormal",
  "productNormalActive",
  "productNormalHover",
  "redDark",
  "redDarkActive",
  "redDarker",
  "redDarkHover",
  "redLight",
  "redLightActive",
  "redLightHover",
  "redNormal",
  "redNormalActive",
  "redNormalHover",
  "socialFacebook",
  "socialFacebookActive",
  "socialFacebookHover",
  "white",
  "whiteActive",
  "whiteHover",
];

export default {
  Example: () => (
    <Skeleton
      animationInterval={0.5}
      animationSpeed={3}
      gradientRatio={2}
      backgroundColor="cloudNormal"
      foregroundColor="cloudDark"
    />
  ),
  exampleKnobs: [
    {
      component: "Skeleton",
      knobs: [
        {
          name: "animationInterval",
          type: "number",
          defaultValue: 0.5,
        },
        {
          name: "animationSpeed",
          type: "number",
          defaultValue: 3,
        },
        {
          name: "gradientRatio",
          type: "number",
          defaultValue: 2,
        },
        {
          name: "backgroundColor",
          type: "select",
          options: COLORS,
          defaultValue: "cloudNormal",
        },
        {
          name: "foregroundColor",
          type: "select",
          options: COLORS,
          defaultValue: "cloudDark",
        },
      ],
    },
  ],
};
