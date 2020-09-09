// @flow
import * as React from "react";

import ButtonLink from "../../ButtonLink";
import CountryFlag from "../../CountryFlag";
import Drawer from "../../Drawer";
import useMediaQuery from "../../hooks/useMediaQuery";
import LinkList from "../../LinkList";
import NavigationBar from "../index";
import Stack from "../../Stack";
import TextLink from "../../TextLink";
import * as Icons from "../../icons";

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
                  src="https://orbit.kiwi/files/2019/08/cropped-OrbitLogo-1.png"
                  alt="Orbit by Kiwi.com"
                  height="40px"
                />
              </div>
            </ButtonLink>
            <ButtonLink type="secondary" iconLeft={<Icons.AirplaneTakeoff />} title="Travel" />
            <ButtonLink type="secondary" iconLeft={<Icons.Accommodation />} title="Rooms" />
            <ButtonLink type="secondary" iconLeft={<Icons.Partners />} title="Careers" />
            {isLargeMobile && (
              <Stack justify="end" inline>
                <ButtonLink type="secondary" iconLeft={<CountryFlag code="gb" />} title="English" />
                <ButtonLink type="secondary" iconLeft={<Icons.QuestionCircle />} title="Help" />
                <ButtonLink
                  type="secondary"
                  iconLeft={<Icons.AccountCircle />}
                  title="My account"
                />
              </Stack>
            )}
          </Stack>
        </NavigationBar>
      </>
    );
  },
  info: {
    title: "Menu",
    description:
      "To add a menu button (such as to hold multiple options on smaller screens), use <code>onMenuOpen</code> to handle clicks on the menu button. Without this prop, the menu button does not appear.",
  },
};
