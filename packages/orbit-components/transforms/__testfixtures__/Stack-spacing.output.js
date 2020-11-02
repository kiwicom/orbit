// @noflow
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Stack, Button } from "@kiwicom/orbit-components";

const MyApp = () => {
  return (
    <Stack spacing="XXXSmall">
      <Stack
        spacing="XXSmall"
        mediumMobile={{ spacing: "XSmall" }}
        largeMobile={{ spacing: "small" }}
        tablet={{ spacing: "medium" }}
        desktop={{ spacing: "large" }}
        largeDesktop={{ spacing: "XLarge" }}
      >
        <Button type="primary">Hello World</Button>
        <Button type="secondary">Hello World</Button>
      </Stack>
      <Stack
        spacing="XLarge"
        mediumMobile={{ spacing: "extraLoose" }}
        largeMobile={{ spacing: "XLarge" }}
        tablet={{ spacing: "XSmall" }}
        desktop={{ spacing: "XXXSmall" }}
        largeDesktop={{ spacing: "none" }}
      >
        <Button type="primary">Hello World</Button>
        <Button type="secondary">Hello World</Button>
      </Stack>
    </Stack>
  );
};

export default MyApp;
