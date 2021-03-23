import * as React from "react";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";
import { Stack, Heading, Text } from "@kiwicom/orbit-components";
import ButtonPrimitive from "@kiwicom/orbit-components/lib/primitives/ButtonPrimitive";

export default {
  Example: () => (
    <Stack>
      <Stack spaceAfter="large">
        <Heading as="h3" type="title3">
          Box shadow
        </Heading>
        <Stack flex>
          <ButtonPrimitive
            boxShadow={defaultTheme.orbit.boxShadowAction}
            background={defaultTheme.orbit.backgroundButtonSecondary}
            foreground={defaultTheme.orbit.colorTextPrimary}
          >
            Click me
          </ButtonPrimitive>
        </Stack>
      </Stack>
      <Stack>
        <Stack spaceAfter="large">
          <Heading as="h3" type="title3">
            Hoever, focus, active
          </Heading>
          <Text>
            You can change the background and the foreground properties based on user interaction.
          </Text>
          <Stack flex>
            <Stack>
              <Heading as="h4" type="title4">
                Hover
              </Heading>
              <ButtonPrimitive
                boxShadowHover={defaultTheme.orbit.boxShadowButtonFocus}
                boxShadow={defaultTheme.orbit.boxShadowAction}
                background={defaultTheme.orbit.backgroundButtonSecondary}
                foreground={defaultTheme.orbit.colorTextPrimary}
              >
                Click me
              </ButtonPrimitive>
            </Stack>
            <Stack>
              <Heading as="h4" type="title4">
                Focus
              </Heading>
              <ButtonPrimitive
                boxShadowFocus={defaultTheme.orbit.boxShadowButtonFocus}
                boxShadow={defaultTheme.orbit.boxShadowAction}
                background={defaultTheme.orbit.backgroundButtonSecondary}
                foreground={defaultTheme.orbit.colorTextPrimary}
              >
                Click me
              </ButtonPrimitive>
            </Stack>
            <Stack>
              <Heading as="h4" type="title4">
                Active
              </Heading>
              <ButtonPrimitive
                boxShadowActive={defaultTheme.orbit.boxShadowActionActive}
                boxShadow={defaultTheme.orbit.boxShadowAction}
                background={defaultTheme.orbit.backgroundButtonSecondary}
                foreground={defaultTheme.orbit.colorTextPrimary}
              >
                Click me
              </ButtonPrimitive>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Colors",
    description: "You can set the box shadow in various states.",
  },
};
