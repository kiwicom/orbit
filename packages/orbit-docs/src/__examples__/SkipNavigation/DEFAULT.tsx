import React from "react";
import {
  Heading,
  Stack,
  SkipNavigation,
  Text,
  TextLink,
  Card,
  CardSection,
} from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <>
      <SkipNavigation />
      <Stack>
        <Stack spacing="small">
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
        <Stack spacing="small">
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
};
