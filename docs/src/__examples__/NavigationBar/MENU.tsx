import React from "react";
import {
  ButtonLink,
  Stack,
  TextLink,
  CountryFlag,
  NavigationBar,
  Drawer,
  LinkList,
} from "@kiwicom/orbit-components";
import {
  Accommodation,
  AccountCircle,
  AirplaneTakeoff,
  Partners,
  QuestionCircle,
} from "@kiwicom/orbit-components/icons";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";

export default {
  Example: () => {
    const [showDrawer, setShowDrawer] = React.useState(false);
    const { isLargeMobile } = useMediaQuery();
    return (
      <>
        {showDrawer && (
          <Drawer
            onClose={() => {
              setShowDrawer(false);
            }}
            shown={showDrawer}
          >
            <LinkList>
              <TextLink type="secondary">English</TextLink>
              <TextLink type="secondary">Help</TextLink>
              <TextLink type="secondary">My account</TextLink>
            </LinkList>
          </Drawer>
        )}
        <NavigationBar onMenuOpen={isLargeMobile ? undefined : () => setShowDrawer(true)}>
          <Stack direction="row" align="center" justify={isLargeMobile ? "center" : "start"}>
            <ButtonLink href="https://orbit.kiwi">
              <div style={{ maxWidth: "40px", overflow: "hidden" }}>
                <img
                  src="https://images.kiwi.com/common/orbit-logo-full.png"
                  alt="Orbit by Kiwi.com"
                  height="40px"
                />
              </div>
            </ButtonLink>
            <ButtonLink type="secondary" iconLeft={<AirplaneTakeoff ariaHidden />} title="Travel" />
            <ButtonLink type="secondary" iconLeft={<Accommodation ariaHidden />} title="Rooms" />
            <ButtonLink type="secondary" iconLeft={<Partners ariaHidden />} title="Careers" />
            {isLargeMobile && (
              <Stack justify="end" inline>
                <ButtonLink type="secondary" iconLeft={<CountryFlag code="gb" />} title="English" />
                <ButtonLink
                  type="secondary"
                  iconLeft={<QuestionCircle ariaHidden />}
                  title="Help"
                />
                <ButtonLink
                  type="secondary"
                  iconLeft={<AccountCircle ariaHidden />}
                  title="My account"
                />
              </Stack>
            )}
          </Stack>
        </NavigationBar>
      </>
    );
  },
};
