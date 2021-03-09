// @flow
import * as React from "react";

import defaultTheme from "../../../defaultTheme";
import ButtonPrimitive from "../index";
import Stack from "../../../Stack";

export default {
  Example: () => (
    <Stack flex>
      <ButtonPrimitive
        padding={defaultTheme.orbit.paddingButtonSmall}
        background={defaultTheme.orbit.backgroundButtonSecondary}
        foreground={defaultTheme.orbit.colorTextPrimary}
      >
        Click me
      </ButtonPrimitive>
      <ButtonPrimitive
        padding={defaultTheme.orbit.paddingButtonNormal}
        background={defaultTheme.orbit.backgroundButtonSecondary}
        foreground={defaultTheme.orbit.colorTextPrimary}
      >
        Click me
      </ButtonPrimitive>
      <ButtonPrimitive
        padding={defaultTheme.orbit.paddingButtonLarge}
        background={defaultTheme.orbit.backgroundButtonSecondary}
        foreground={defaultTheme.orbit.colorTextPrimary}
      >
        Click me
      </ButtonPrimitive>
      <ButtonPrimitive
        padding="16px 8px"
        background={defaultTheme.orbit.backgroundButtonSecondary}
        foreground={defaultTheme.orbit.colorTextPrimary}
      >
        Click me
      </ButtonPrimitive>
    </Stack>
  ),
  info: {
    title: "Padding",
    description: "You can set the padding within the button as you wish.",
  },
};
