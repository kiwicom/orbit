import React from "react";
import { ButtonMobileStore } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <ButtonMobileStore
      alt="Get it on Google Play"
      href="https://play.google.com/store/apps/details?id=com.skypicker.main"
      type="googlePlay"
    />
  ),
  knobs: [
    { name: "href", type: "text", defaultValue: "" },
    { name: "type", type: "select", defaultValue: "appStore", options: ["appStore", "googlePlay"] },
    { name: "variant", type: "select", defaultValue: "dark", options: ["dark", "light"] },
  ],
};
