import * as React from "react";
import { ButtonMobileStore } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <ButtonMobileStore
      alt="Get it on Google Play"
      href="https://play.google.com/store/apps/details?id=com.skypicker.main"
      type="googlePlay"
    />
  ),
  info: {
    title: "Default mobile store button",
    description: "For mobile store buttons, you only need to select the type.",
  },
};
