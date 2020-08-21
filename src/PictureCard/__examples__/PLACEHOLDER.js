// @flow
import * as React from "react";

import PictureCard from "../index";
import Stack from "../../Stack";
import Text from "../../Text";
import TextLink from "../../TextLink";

export default {
  Example: () => (
    <Stack>
      <PictureCard
        image={{
          code: "athens_gr",
          name: "Athens, Greece",
          original: "600x600",
          placeholder: "30x30",
        }}
        height="300px"
        width="300px"
      />
      <Text>
        Note that the placeholder will not work with server-side rendering (SSR). With SSR, you have
        to either leave out the placeholder or use a module from your framework, such as{" "}
        <TextLink
          href="https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr"
          external
        >
          dynamic for Next.js
        </TextLink>
        .
      </Text>
    </Stack>
  ),
  info: {
    title: "Placeholder",
    description:
      "To enable lazy loading of images, use the <code>placeholder</code> prop, preferably with a smaller resolution.",
  },
};
