import React from "react";
import { Heading, Stack, Button } from "@kiwicom/orbit-components";
import {
  ChevronDown,
  ChevronRight,
  Edit,
  PlusCircle,
  Visibility,
} from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack direction="column" spacing="XLarge">
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">With right icon</Heading>
        <Stack flex>
          <Button iconRight={<ChevronRight />}>Continue to payment</Button>
          <Button iconRight={<ChevronDown />}>Show more options</Button>
        </Stack>
      </Stack>
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">With left icon</Heading>
        <Stack flex>
          <Button iconLeft={<PlusCircle />}>Add item</Button>
          <Button type="secondary" iconLeft={<Edit />}>
            Add item
          </Button>
        </Stack>
      </Stack>
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">With both icons</Heading>
        <Button iconLeft={<Visibility />} iconRight={<ChevronRight />}>
          Read more
        </Button>
      </Stack>
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">Only icon</Heading>
        <Button iconLeft={<Edit />} title="Edit this page" />
      </Stack>
    </Stack>
  ),
  knobs: [
    { name: "iconLeft", type: "icon", defaultValue: "" },
    { name: "iconRight", type: "icon", defaultValue: "" },
  ],
};
