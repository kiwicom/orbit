// @flow
import * as React from "react";

import Button from "../index";
import Heading from "../../Heading";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: () => (
    <Stack direction="column" spacing="XLarge">
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">With right icon</Heading>
        <Stack flex>
          <Button iconRight={<Icons.ChevronRight />}>Continue to payment</Button>
          <Button iconRight={<Icons.ChevronDown />}>Show more options</Button>
        </Stack>
      </Stack>
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">With left icon</Heading>
        <Stack flex>
          <Button iconLeft={<Icons.PlusCircle />}>Add item</Button>
          <Button type="secondary" iconLeft={<Icons.Edit />}>
            Add item
          </Button>
        </Stack>
      </Stack>
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">With both icons</Heading>
        <Button iconLeft={<Icons.Visibility />} iconRight={<Icons.ChevronRight />}>
          Read more
        </Button>
      </Stack>
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">Only icon</Heading>
        <Button iconLeft={<Icons.Edit />} title="Edit this page" />
      </Stack>
    </Stack>
  ),
  info: {
    title: "Buttons with icons",
    description:
      "Buttons with icons draw more attention to the action. Left icons are flexible, especially useful when adding an item. Right icons should only be directional, such as to show expansion or that they will take the user elsewhere. If using only an icon, leave the children empty and make sure to include a title.",
  },
};
