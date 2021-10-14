// @flow
import * as React from "react";

import SocialButton from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack direction="row">
      <SocialButton href="https://www.apple.com/" title="Homepage">
        Sign in with Apple
      </SocialButton>
      <SocialButton
        asComponent="div"
        href="https://www.apple.com/"
        onClick={() => window.open("https://www.apple.com/", "_blank")}
        role="button"
        title="Homepage"
      >
        Sign in with Apple
      </SocialButton>
      <SocialButton
        external
        href="https://orbit.kiwi/components/socialbutton/"
        title="Opens in new window"
      >
        Sign in with Apple
      </SocialButton>
    </Stack>
  ),
  info: {
    title: "Buttons as links",
    description:
      "1. When buttons have an *href* prop, they are automatically rendered as <a> elements. 2. You can override this using an *asComponent* prop. (Just note you need to provide the function yourself and you should specific the role of the button.) 3. Buttons marked as *external* automatically open in a new window with *noopener noreferrer* as the *rel* attribute for security.",
  },
};
