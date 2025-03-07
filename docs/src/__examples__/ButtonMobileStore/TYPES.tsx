import React from "react";
import { ButtonMobileStore } from "@kiwicom/orbit-components";

export default {
  Example: () => <ButtonMobileStore alt="Download on the App Store" type="appStore" />,
  exampleVariants: [
    {
      name: "appStore",
      code: `() => <ButtonMobileStore alt="Download on the App Store" type="appStore">appStore</ButtonMobileStore>`,
    },
    {
      name: "googlePlay",
      code: `() => <ButtonMobileStore alt="Download on the Google Play" type="googlePlay">googlePlay</ButtonMobileStore>`,
    },
  ],
};
