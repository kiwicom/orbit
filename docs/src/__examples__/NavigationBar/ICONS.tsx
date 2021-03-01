import * as React from "react";
import { NavigationBar, ButtonLink, Stack, CountryFlag } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/lib/icons";

export default {
  Example: () => (
    <NavigationBar>
      <Stack direction="row" align="center" justify="center">
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
        <Stack justify="end" inline>
          <ButtonLink type="secondary" iconLeft={<CountryFlag code="gb" />} title="English" />
          <ButtonLink type="secondary" iconLeft={<Icons.QuestionCircle />} title="Help" />
          <ButtonLink type="secondary" iconLeft={<Icons.AccountCircle />} title="My account" />
        </Stack>
      </Stack>
    </NavigationBar>
  ),
  info: {
    title: "Default drawer",
    description: "Drawers should appear on a user action and be closable.",
  },
};
