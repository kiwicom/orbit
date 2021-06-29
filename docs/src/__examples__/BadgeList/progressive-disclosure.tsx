import * as React from "react";
import { BaggageSet, KiwicomGuarantee } from "@kiwicom/orbit-components/icons";
import {
  BadgeList,
  BadgeListItem,
  Drawer,
  Heading,
  Stack,
  Text,
  TextLink,
  Tooltip,
} from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [showDrawer, setShowDrawer] = React.useState(false);
    return (
      <>
        {showDrawer && (
          <Drawer
            onClose={() => {
              setShowDrawer(false);
            }}
            shown={showDrawer}
            width="460px"
          >
            <Stack>
              <Heading>What is the Kiwi.com Guarantee?</Heading>
              <Text>
                The Kiwi.com Guarantee is a unique service we offer to protect you in case of
                changes or cancellations caused by the carrier. It&apos;s available on all the
                trips, whether you travel by flight, bus, or train. You can add it when you book
                your trip, it&apos;s not possible to add later.
              </Text>
            </Stack>
          </Drawer>
        )}
        <BadgeList>
          <BadgeListItem type="success" icon={<KiwicomGuarantee />}>
            <TextLink onClick={() => setShowDrawer(true)} type="secondary">
              Transfer protected
            </TextLink>{" "}
            by the Kiwi.com Guarantee
          </BadgeListItem>
          <BadgeListItem icon={<BaggageSet />}>
            You must collect and recheck{" "}
            <Tooltip content="This applies to checked baggage" renderInPortal={false}>
              <Text>your baggage</Text>
            </Tooltip>
          </BadgeListItem>
        </BadgeList>
      </>
    );
  },
  info: {
    title: "Default badge list",
    description: "",
  },
};
