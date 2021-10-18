// @flow
import * as React from "react";

import ButtonMobileStore from "../index";

export default {
  Example: (): React.Node => (
    <ButtonMobileStore
      alt="Get it on Google Play"
      href="https://play.google.com/store/apps/details?id=com.skypicker.main"
      type="googlePlay"
    />
  ),
  info: {
    title: "Accessibility",
    description:
      "To set your own alternative text for the mobile store image (and so the action text for the button, use the <code>alt</alt> prop.",
  },
};
