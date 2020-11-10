/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { Stack } from "@kiwicom/orbit-components";

/**
 * Here we're only testing the incompatibility we found with TypeScript and
 * Babel AST, no need to test everything.
 */

const MyApp = () => {
  const isMobile = false;
  return (
    // @ts-ignore
    <Stack spacing="XXXSmall">
      {/* @ts-ignore */}
      <Stack spacing={isMobile ? "XXSmall" : "XSmall"} mediumMobile={{ spacing: "XSmall" }} />
    </Stack>
  );
};
export default MyApp;
