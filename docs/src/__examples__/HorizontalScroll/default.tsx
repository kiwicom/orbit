import React from "react";
import {
  HorizontalScroll,
  Inline,
  Stack,
  Text,
  Tile,
  OrbitProvider,
  defaultTheme,
} from "@kiwicom/orbit-components";
import { BaggageCabin, BaggageChecked30, BaggagePersonal } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme} useId={React.useId}>
      <HorizontalScroll>
        <Tile title="Complete baggage bundle">
          <Stack>
            <Inline>
              <BaggageChecked30 />
              <Text>30 kg checked baggage</Text>
            </Inline>
            <Inline>
              <BaggageCabin />
              <Text>10 kg cabin baggage</Text>
            </Inline>
            <Inline>
              <BaggagePersonal />
              <Text>8 kg personal item</Text>
            </Inline>
          </Stack>
        </Tile>
        <Tile title="Basic baggage bundle">
          <Stack>
            <Inline>
              <BaggageCabin />
              <Text>10 kg cabin baggage</Text>
            </Inline>
            <Inline>
              <BaggagePersonal />
              <Text>8 kg personal item</Text>
            </Inline>
          </Stack>
        </Tile>
        <Tile title="Personal item only">
          <Inline>
            <BaggagePersonal />
            <Text>8 kg personal item</Text>
          </Inline>
        </Tile>
        <Tile title="Extended baggage bundle">
          <Inline>
            <BaggagePersonal />
            <Text>Up to 40kg personal item</Text>
          </Inline>
        </Tile>
      </HorizontalScroll>
    </OrbitProvider>
  ),
  exampleKnobs: [
    {
      component: "HorizontalScroll",
      knobs: [
        {
          name: "minHeight",
          type: "number",
          defaultValue: "",
        },
        {
          name: "arrows",
          type: "boolean",
          defaultValue: false,
        },
        { name: "arrowColor", type: "text", defaultValue: "" },
        { name: "arrowLeftAriaLabel", type: "text", defaultValue: "" },
        { name: "arrowRightAriaLabel", type: "text", defaultValue: "" },
        { name: "overflowElevation", type: "boolean", defaultValue: false },
        { name: "elevationColor", type: "string", defaultValue: "paletteCloudDark" },
        {
          name: "scrollPadding",
          type: "number",
          defaultValue: "",
        },
        {
          name: "scrollSnap",
          type: "select",
          options: ["mandatory", "proximity", "inline", "none"],
          defaultValue: "none",
        },
        {
          name: "spacing",
          type: "select",
          options: [
            "none",
            "50",
            "100",
            "150",
            "200",
            "300",
            "400",
            "600",
            "800",
            "1000",
            "1200",
            "1600",
          ],
          defaultValue: "none",
        },
      ],
    },
  ],
};
