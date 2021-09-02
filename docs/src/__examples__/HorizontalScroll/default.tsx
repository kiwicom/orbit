import React from "react";
import { HorizontalScroll, Inline, Stack, Text, Tile } from "@kiwicom/orbit-components";
import { BaggageCabin, BaggageChecked30, BaggagePersonal } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
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
    </HorizontalScroll>
  ),
  info: {
    title: "Default icon",
    description: "By default, icons are primary unless they inherit a different color.",
  },
};
