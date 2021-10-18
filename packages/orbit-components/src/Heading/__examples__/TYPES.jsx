// @flow
import * as React from "react";

import Heading from "../index";
import Stack from "../../Stack";
import Separator from "../../Separator";

export default {
  Example: (): React.Node => (
    <Stack>
      <Heading type="display">Display title</Heading>
      <Heading type="displaySubtitle">Display subtitle</Heading>
      <Separator />
      <Heading type="title1">Title 1</Heading>
      <Heading type="title2">Title 2</Heading>
      <Heading type="title3">Title 3</Heading>
      <Heading type="title4">Title 4</Heading>
      <Heading type="title5">Title 5</Heading>
    </Stack>
  ),
  info: {
    title: "Heading types",
    description:
      "Headings are split based on size and appearance into seven different types. These types represent a visual hierarchy from most important to least.",
  },
};
