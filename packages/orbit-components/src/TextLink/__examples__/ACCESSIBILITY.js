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
          A <code>tabIndex</code> of <code>0</code> makes the given element focusable in keyboard
          navigation. Do not use this except in rare cases where you need to render a TextLink as a
          non-actionable element (like a <code>div</code>). It&apos;s also possible to hide elements
          from keyboard navigation by passing a value of <code>-1</code>.{" "}
        </Text>
        <Text>
          Most of the time, you shouldn&apos;t have use this prop. Click the link below to read
          more.
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
