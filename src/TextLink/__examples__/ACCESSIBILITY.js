// @flow
import * as React from "react";

import TextLink from "../index";
import Heading from "../../Heading";
import Stack from "../../Stack";
import Text from "../../Text";
import * as Icons from "../../icons";

export default {
  Example: () => (
    <Stack direction="column">
      <Stack shrink direction="column" spacing="condensed">
        <Heading type="title3" as="h3">
          Tab index
        </Heading>
        <Text>
          The <code>tabIndex</code> prop makes the given element focusable in keyboard navigation.
          Click the link below to read more.
        </Text>

        <TextLink
          asComponent="div"
          onClick={() => {
            window.open(
              "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",
              "_blank",
              "noopener,noreferrer",
            );
          }}
          tabIndex={0}
          icon={<Icons.NewWindow ariaLabel="Opens in new window" />}
        >
          Tab index docs
        </TextLink>
      </Stack>
      <Stack shrink direction="column" spacing="condensed">
        <Heading type="title3" as="h3">
          Title
        </Heading>
        <Text>
          The <code>title</code> prop presents additional advisory information about the given
          element, such as the purpose of the link. Don&apos;t repeat the text of the link.
          Don&apos;t rely only on the title to make your links accessible. Not all assistive
          technologies support this attribute, so make sure the link makes sense without it.
        </Text>
        <TextLink
          title="Info from the W3 "
          href="https://www.w3.org/WAI/WCAG20/Techniques/ua-notes/html#H33"
          external
          icon={<Icons.NewWindow ariaLabel="Opens in new window" />}
        >
          Using links with titles
        </TextLink>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Accessibility",
    description:
      "Make sure all of your text links are accessible to everyone. Read more at https://orbit.kiwi/accessibility/accessibility/",
  },
};
