import "./index.css";

import * as React from "react";
import { beforeMount } from "@playwright/experimental-ct-react/hooks";
import { tokensToCssVars } from "@kiwicom/orbit-design-tokens";

import RandomIdProvider from "../src/OrbitProvider/RandomId/Provider";
import { getCssVarsForWL } from "../src/OrbitProvider";
import defaultTheme from "../src/defaultTheme";

beforeMount(async ({ App }) => {
  const ID = "orbit-theme-css-vars";
  const style = document.createElement("style");
  style.setAttribute("id", ID);
  style.innerText = tokensToCssVars({
    tokens: getCssVarsForWL(defaultTheme.orbit),
    cssClass: ":root",
  });
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(style);

  return (
    <RandomIdProvider>
      <App />
    </RandomIdProvider>
  );
});
