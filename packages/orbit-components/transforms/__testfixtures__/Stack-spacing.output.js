// @noflow
import React from "react";
import { Stack, Button } from "@kiwicom/orbit-components";

const MyApp = () => {
  const isMobile = false;
  return (
    <Stack spacing="XXXSmall">
      <Stack
        spacing={isMobile ? "XXSmall" : "XSmall"}
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
        mediumMobile={{ spacing: "XXLarge" }}
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
