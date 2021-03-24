import * as React from "react";
import { Heading, Stack, Text, SkipLink } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [moreInfo, setMoreInfo] = React.useState(false);
    const handleClick = () => setMoreInfo(!moreInfo);
    return (
      <>
        <SkipLink
          links={[
            {
              name: `${moreInfo ? "Hide" : "Show"} extra information`,
              onClick: handleClick,
            },
          ]}
        />
        <Stack>
          <Stack spacing="small">
            <Heading id="how-to">How to activate the link</Heading>
            <Text>
              To see the link, click in this container. Then use Tab or Shift+Tab to focus on the
              link. Then click it or press Enter to initiate the action.
            </Text>
          </Stack>
          {moreInfo && (
            <Stack spacing="small">
              <Heading id="skiplink">SkipLink</Heading>
              <Text>
                When designing with accessibility in mind, it&apos;s important to remember that not
                everyone will navigate your pages in the same way. Some people will go through all
                of your content in the order it’s presented, often having to go through irrelevant
                content to get to what they want.
              </Text>
              <Text>
                Offer skip links at the start of complex content, such as cards and itinerary
                results with multiple actions within them. Then users who navigate in a non-visual
                way can skip directly to the action they want to take. It can help you satisfy{" "}
                <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0 Criterion 2.4.1
                and won’t clutter up your designs for anyone who isn’t using it.
              </Text>
              <Text>
                If you want to skip from the top of a page or you have other actions you want to
                offer at the start, consider a SkipNavigation component.
              </Text>
            </Stack>
          )}
        </Stack>
      </>
    );
  },
  info: {
    title: "OnClick",
    description:
      "In addition to links, you can add any action to the list of links using the <code>onClick</code> key for a link.",
  },
};
