import React from "react";
import { ButtonMobileStore } from "@kiwicom/orbit-components";

export default {
  Example: () => <ButtonMobileStore type="appStore" />,
  exampleVariants: [
    {
      name: "appStore",
      code: `() => <ButtonMobileStore type="appStore">appStore</ButtonMobileStore>`,
    },
    {
      name: "googlePlay",
      code: `() => <ButtonMobileStore type="googlePlay">googlePlay</ButtonMobileStore>`,
    },
  ],
};
