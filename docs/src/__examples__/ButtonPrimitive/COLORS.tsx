import * as React from "react";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";
import { Stack, Heading, Text } from "@kiwicom/orbit-components";
import { AirplaneTakeoff } from "@kiwicom/orbit-components/icons";
import ButtonPrimitive from "@kiwicom/orbit-components/lib/primitives/ButtonPrimitive";

export default {
  Example: () => (
    <Stack>
      <Stack spaceAfter="large">
        <Heading as="h3" type="title3">
          Background and forground
        </Heading>
        <Text>
          You can set the background and the foreground color. Backgrounds can be any CSS property,
          including gradients and images. For the forground, only colors are available and affect
          both the text and any icons.
        </Text>
        <Stack flex>
          <ButtonPrimitive
            iconLeft={<AirplaneTakeoff />}
            background="linear-gradient(264.15deg, #FC8D3E 0%, #F16E5B 100%)"
            foreground={defaultTheme.orbit.colorTextWhite}
          >
            Click me
          </ButtonPrimitive>
          <ButtonPrimitive
            iconLeft={<AirplaneTakeoff />}
            background="url(https://images.kiwi.com/photos/60x60/paris_fr.jpg)"
            foreground={defaultTheme.orbit.colorTextWhite}
          >
            Orbit
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
                iconLeft={<AirplaneTakeoff />}
                background="linear-gradient(264.15deg, #FC8D3E 0%, #F16E5B 100%)"
                backgroundHover={defaultTheme.orbit.backgroundButtonSecondary}
                foreground={defaultTheme.orbit.colorTextWhite}
                foregroundHover={defaultTheme.orbit.colorTextPrimary}
              >
                Click me
              </ButtonPrimitive>
            </Stack>
            <Stack>
              <Heading as="h4" type="title4">
                Focus
              </Heading>
              <ButtonPrimitive
                iconLeft={<AirplaneTakeoff />}
                background="linear-gradient(264.15deg, #FC8D3E 0%, #F16E5B 100%)"
                backgroundFocus={defaultTheme.orbit.backgroundButtonSecondary}
                foreground={defaultTheme.orbit.colorTextWhite}
                foregroundFocus={defaultTheme.orbit.colorTextPrimary}
              >
                Click me
              </ButtonPrimitive>
            </Stack>
            <Stack>
              <Heading as="h4" type="title4">
                Active
              </Heading>
              <ButtonPrimitive
                iconLeft={<AirplaneTakeoff />}
                background="linear-gradient(264.15deg, #FC8D3E 0%, #F16E5B 100%)"
                backgroundActive={defaultTheme.orbit.backgroundButtonSecondary}
                foreground={defaultTheme.orbit.colorTextWhite}
                foregroundActive={defaultTheme.orbit.colorTextPrimary}
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
    title: "Box shadow",
    description: "You can change the background and foreground colors in various ways.",
  },
};
