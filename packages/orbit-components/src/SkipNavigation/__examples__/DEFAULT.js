// @flow
import * as React from "react";

import Card from "../../Card";
import CardSection from "../../Card/CardSection";
import Heading from "../../Heading";
import SkipNavigation from "../index";
import Stack from "../../Stack";
import Text from "../../Text";
import TextLink from "../../TextLink";

export default {
  Example: () => (
    <>
      <SkipNavigation />
      <Stack>
        <Stack spacing="compact">
          <Heading dataA11ySection="how-to">How to see the links</Heading>
          <Text>
            To see the links, click in this container. Then use Tab or Shift+Tab to focus on the
            links.
          </Text>
        </Stack>
        <Card dataA11ySection="skipnav" title="SkipNavigation">
          <CardSection>
            When designing with accessibility in mind, it’s important to remember that not everyone
            will navigate your pages in the same way. Some people will go through all of your
            content in the order it’s presented, which often means having to navigate through the
            same menus on every single page.
          </CardSection>
          <CardSection>
            SkipNavigation components at the top of pages offer these people the option to skip past
            the repeated content and get right to the primary actions on the given page. It can help
            you satisfy <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0 Criterion
            2.4.1 and won’t clutter up your designs for anyone who isn’t using it.
          </CardSection>
          <CardSection>
            SkipNavigation components can include other common actions at the start of the page,
            such as submitting feedback or requesting a refund.
          </CardSection>
          <CardSection>
            If you want to let users skip past parts of smaller components of the page, consider a{" "}
            <TextLink href="https://orbit.kiwi/accessibility/skiplink/">skip link</TextLink>.
          </CardSection>
        </Card>
        <Stack spacing="compact">
          <Heading dataA11ySection="WCAG">Web Content Accessibility Guidelines</Heading>
          <Text>
            The Web Content Accessibility Guidelines (WCAG) offer advice and information on making
            content on the internet more accessible. They can help you make your content more usable
            for everyone, no matter how they experience it.
          </Text>
          <Text>
            To ensure the best experience for everyone, the WCAG provide specific, testable
            criteria. These criteria aren&apos;t based on any given technology. So you can use them
            to verify that your content is accessible to a broad range of people.
          </Text>
        </Stack>
      </Stack>
    </>
  ),
  info: {
    title: "Default skip navigation",
    description:
      "By default, the SkipNavigation scans the page for elements with a <code>dataA11ySection</code> and presents links to them as a list of links hidden to most visitors and visible on focus. If there are no such elements, the component <strong>does not work</strong>.",
  },
};
