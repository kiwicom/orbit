import React from "react";
import { PictureCard, Stack, Text } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack>
      <Stack>
        <Stack spacing="XXXSmall">
          <Text>
            When the picture card has no content, make sure to include a <code>name</code> for the
            card. This way people who won&apos;t see the picture get the same message.
          </Text>
          <PictureCard
            height="155px"
            image={{
              code: "athens_gr",
              name: "Athens",
              original: "900x120",
            }}
          />
        </Stack>
        <Stack spacing="XXXSmall">
          <Text>
            When there is the same text in the card, set the <code>name</code> of the picture to
            blank to not repeat the same text.
          </Text>
          <PictureCard
            title="Athens"
            height="155px"
            image={{
              code: "athens_gr",
              name: "",
              original: "900x120",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  ),
};
