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
  exampleKnobs: [
    {
      component: "ButtonMobileStore",
      knobs: [
        {
          name: "href",
          type: "text",
          defaultValue: "https://play.google.com/store/apps/details?id=com.skypicker.main",
        },
        {
          name: "type",
          type: "select",
          defaultValue: "googlePlay",
          options: ["appStore", "googlePlay"],
        },
      ],
    },
  ],
};
