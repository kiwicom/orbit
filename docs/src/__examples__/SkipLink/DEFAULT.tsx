import * as React from "react";
import { Heading, Stack, Text, SkipLink } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <>
      <SkipLink
        links={[
          {
            href: "#skiplink",
            name: "Go to info on SkipLink",
          },
          {
            href: "#WCAG",
            name: "Go to info on Web Content Accessibility Guidelines",
          },
        ]}
      />
      <Stack>
        <Stack spacing="300">
          <Heading id="how-to">How to see the links</Heading>
          <Text>
            To see the links, click in this container. Then use Tab or Shift+Tab to focus on the
            links.
          </Text>
        </Stack>
        <Stack spacing="300">
          <Heading id="skiplink">SkipLink</Heading>
          <Text>
            When designing with accessibility in mind, it&apos;s important to remember that not
            everyone will navigate your pages in the same way. Some people will go through all of
            your content in the order it&apos;s presented, often having to go through irrelevant
            content to get to what they want.
          </Text>
          <Text>
            Offer skip links at the start of complex content, such as cards and itinerary results
            with multiple actions within them. Then users who navigate in a non-visual way can skip
            directly to the action they want to take. It can help you satisfy{" "}
            <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0 Criterion 2.4.1 and
            won’t clutter up your designs for anyone who isn&apos;t using it.
          </Text>
          <Text>
            If you want to skip from the top of a page or you have other actions you want to offer
            at the start, consider a SkipNavigation component.
          </Text>
        </Stack>
        <Stack spacing="300">
          <Heading id="WCAG">Web Content Accessibility Guidelines</Heading>
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
