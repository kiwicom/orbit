// @flow
import * as React from "react";

import Heading from "../../Heading";
import SkipNavigation from "../index";
import Stack from "../../Stack";
import Text from "../../Text";
import TextLink from "../../TextLink";

export default {
  Example: () => (
    <>
      <SkipNavigation feedbackUrl="https://github.com/kiwicom/orbit/issues/new/choose" />
      <Stack>
        <Stack spacing="small">
          <Heading dataA11ySection="how-to">How to get to the feedback URL</Heading>
          <Text>
            To see the feedback button, click in this container. Then use Tab or Shift+Tab to focus
            on the component. Then click the <b>Send feedback</b> button.
          </Text>
        </Stack>
        <Stack spacing="small">
          <Heading>SkipNavigation</Heading>
          <Text>
            When designing with accessibility in mind, it&apos;s important to remember that not
            everyone will navigate your pages in the same way. Some people will go through all of
            your content in the order it&apos;s presented, which often means having to navigate
            through the same menus on every single page.
          </Text>
          <Text>
            SkipNavigation components at the top of pages offer these people the option to skip past
            the repeated content and get right to the primary actions on the given page. It can help
            you satisfy <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0 Criterion
            2.4.1 and won’t clutter up your designs for anyone who isn&apos;t using it.
          </Text>
          <Text>
            SkipNavigation components can include other common actions at the start of the page,
            such as submitting feedback or requesting a refund.
          </Text>
          <Text>
            If you want to let users skip past parts of smaller components of the page, consider a{" "}
            <TextLink href="https://orbit.kiwi/accessibility/skiplink/">skip link</TextLink>.
          </Text>
        </Stack>
      </Stack>
    </>
  ),
  info: {
    title: "Actions",
    description:
      "In addition to links to elements in the page, you can add common actions to the component.",
  },
};
