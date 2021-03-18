import * as React from "react";
import { Heading, Stack, ButtonLink } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack direction="column" spacing="XLarge">
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">With right icon</Heading>
        <Stack flex>
          <ButtonLink iconRight={<Icons.ChevronRight />}>Continue to payment</ButtonLink>
          <ButtonLink iconRight={<Icons.ChevronDown />}>Show more options</ButtonLink>
        </Stack>
      </Stack>
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">With left icon</Heading>
        <Stack flex>
          <ButtonLink iconLeft={<Icons.PlusCircle />}>Add item</ButtonLink>
          <ButtonLink type="secondary" iconLeft={<Icons.Edit />}>
            Add item
          </ButtonLink>
        </Stack>
      </Stack>
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">With both icons</Heading>
        <ButtonLink iconLeft={<Icons.Visibility />} iconRight={<Icons.ChevronRight />}>
          Read more
        </ButtonLink>
      </Stack>
      <Stack direction="column" spacing="XSmall">
        <Heading type="title4">Only icon</Heading>
        <ButtonLink iconLeft={<Icons.Edit />} title="Edit this page" />
      </Stack>
    </Stack>
  ),
  info: {
    title: "Button links with icons",
    description:
      "Button links with icons draw more attention to the action. Left icons are flexible, especially useful when adding an item. Right icons should only be directional, such as to show expansion or that they will take the user elsewhere. If using only an icon, leave the children empty and make sure to include a title.",
  },
};
