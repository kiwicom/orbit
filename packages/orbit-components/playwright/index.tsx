import "./index.css";

import * as React from "react";
import { beforeMount } from "@playwright/experimental-ct-react/hooks";

import RandomIdProvider from "../src/OrbitProvider/RandomId/Provider";

beforeMount(async ({ App }) => {
  return (
    <RandomIdProvider useId={React.useId}>
      <App />
    </RandomIdProvider>
  );
});
