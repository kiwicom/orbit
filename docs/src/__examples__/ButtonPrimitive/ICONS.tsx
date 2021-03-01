import * as React from "react";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";
import { Stack } from "@kiwicom/orbit-components";
import { Heading } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/lib/icons";
import ButtonPrimitive from "@kiwicom/orbit-components/lib/primitives/ButtonPrimitive";

export default {
  Example: () => (
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
          icons={{ foreground: defaultTheme.orbit.colorIconSuccess }}
          iconLeft={<Icons.Edit />}
        >
          Edit
        </ButtonPrimitive>
        <ButtonPrimitive
          icons={{ foreground: defaultTheme.orbit.colorIconInfo }}
          iconLeft={<Icons.Edit />}
        >
          Edit
        </ButtonPrimitive>
      </Stack>
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">Color on hover, focus, and active</Heading>
        <ButtonPrimitive
          icons={{ foregroundHover: defaultTheme.orbit.colorIconSuccess }}
          iconLeft={<Icons.Edit />}
        >
          Edit
        </ButtonPrimitive>
        <ButtonPrimitive
          icons={{ foregroundFocus: defaultTheme.orbit.colorIconSuccess }}
          iconLeft={<Icons.Edit />}
        >
          Edit
        </ButtonPrimitive>
        <ButtonPrimitive
          icons={{ foregroundActive: defaultTheme.orbit.colorIconSuccess }}
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
