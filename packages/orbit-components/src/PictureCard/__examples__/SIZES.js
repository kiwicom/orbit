// @flow
import * as React from "react";

import PictureCard from "../index";
import Heading from "../../Heading";
import Stack from "../../Stack";

export default {
  Example: () => (
    <Stack>
      <Stack spacing="tight">
        <Heading as="h3" type="title3">
          Default
        </Heading>
        <PictureCard
          image={{
            code: "athens_gr",
            name: "Athens, Greece",
            original: "1200x628",
          }}
        />
      </Stack>
      <Stack spacing="tight">
        <Heading as="h3" type="title3">
          Set height
        </Heading>
        <PictureCard
          height="155px"
          image={{
            code: "athens_gr",
            name: "Athens, Greece",
            original: "900x120",
          }}
        />
      </Stack>
      <Stack spacing="tight">
        <Heading as="h3" type="title3">
          Set width
        </Heading>
        <PictureCard
          width="600px"
          image={{
            code: "athens_gr",
            name: "Athens, Greece",
            original: "600x330",
          }}
        />
      </Stack>
      <Stack spacing="tight">
        <Heading as="h3" type="title3">
          Width as percentage
        </Heading>
        <PictureCard
          width="35%"
          image={{
            code: "athens_gr",
            name: "Athens, Greece",
            original: "600x330",
          }}
        />
      </Stack>
      <Stack spacing="tight">
        <Heading as="h3" type="title3">
          Set height and width
        </Heading>
        <PictureCard
          height="150px"
          width="150px"
          image={{
            code: "athens_gr",
            name: "Athens, Greece",
            original: "275x250",
          }}
        />
      </Stack>
    </Stack>
  ),
  info: {
    title: "Size",
    description:
      'You can set the height and/or width of the picture card. The defaults are a height of 300px and a width of 100%. You can also change the dimensions of the image directly. See <a href="https://images.kiwi.com/" target="_blank" rel="noopener noreferrer">photos docs</a> for available sizes.',
  },
};
