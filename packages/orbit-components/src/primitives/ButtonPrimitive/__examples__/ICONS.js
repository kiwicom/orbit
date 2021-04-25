// @flow
import * as React from "react";

import defaultTheme from "../../../defaultTheme";
import ButtonPrimitive from "../index";
import Heading from "../../../Heading";
import Stack from "../../../Stack";
import * as Icons from "../../../icons";

export default {
  Example: (): React.Node => (
    <Stack>
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">Width and height</Heading>
        <ButtonPrimitive icons={{ width: "12px", height: "12px" }} iconLeft={<Icons.Edit />}>
          Edit
        </ButtonPrimitive>
        <ButtonPrimitive icons={{ width: "24px", height: "24px" }} iconLeft={<Icons.Edit />}>
          Edit
        </ButtonPrimitive>
      </Stack>
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">Left margin</Heading>
        <ButtonPrimitive icons={{ leftMargin: "4px" }} iconLeft={<Icons.Edit />}>
          Edit
        </ButtonPrimitive>
        <ButtonPrimitive icons={{ leftMargin: "16px" }} iconLeft={<Icons.Edit />}>
          Edit
        </ButtonPrimitive>
      </Stack>
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">Right margin</Heading>
        <ButtonPrimitive icons={{ rightMargin: "4px" }} iconRight={<Icons.Edit />}>
          Edit
        </ButtonPrimitive>
        <ButtonPrimitive icons={{ rightMargin: "16px" }} iconRight={<Icons.Edit />}>
          Edit
        </ButtonPrimitive>
      </Stack>
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">Color</Heading>
        <ButtonPrimitive
          icons={{ foreground: defaultTheme.orbit.iconForegroundSuccess }}
          iconLeft={<Icons.Edit />}
        >
          Edit
        </ButtonPrimitive>
        <ButtonPrimitive
          icons={{ foreground: defaultTheme.orbit.iconForegroundInfo }}
          iconLeft={<Icons.Edit />}
        >
          Edit
        </ButtonPrimitive>
      </Stack>
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">Color on hover, focus, and active</Heading>
        <ButtonPrimitive
          icons={{ foregroundHover: defaultTheme.orbit.iconForegroundSuccess }}
          iconLeft={<Icons.Edit />}
        >
          Edit
        </ButtonPrimitive>
        <ButtonPrimitive
          icons={{ foregroundFocus: defaultTheme.orbit.iconForegroundSuccess }}
          iconLeft={<Icons.Edit />}
        >
          Edit
        </ButtonPrimitive>
        <ButtonPrimitive
          icons={{ foregroundActive: defaultTheme.orbit.iconForegroundSuccess }}
          iconLeft={<Icons.Edit />}
        >
          Edit
        </ButtonPrimitive>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Icons",
    description:
      "In addition to the properties available with buttons, button primitives offer additional icon styling options with the <code>icons</code> object.",
  },
};
