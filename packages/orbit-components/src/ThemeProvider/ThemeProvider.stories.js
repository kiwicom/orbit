// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select, boolean, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import useTranslate from "../hooks/useTranslate";
import Button from "../Button";
import getTokens from "../getTokens";
import languages from "../data/dictionary";
import Badge from "../Badge";
import Tooltip from "../Tooltip";

import ThemeProvider from "./index";

const ButtonWithTranslation = () => {
  const translate = useTranslate();
  return <Button>{translate("button_close")}</Button>;
};

storiesOf("ThemeProvider", module)
  .add(
    "Dictionary context",
    () => {
      const dictionary = select("dictionary", Object.keys(languages));
      return (
        <ThemeProvider theme={{ orbit: getTokens() }} dictionary={languages[dictionary]}>
          <ButtonWithTranslation />
        </ThemeProvider>
      );
    },
    {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Without transitions",
    () => {
      const transitions = boolean("transitions", false);
      return (
        <ThemeProvider theme={{ orbit: getTokens(), transitions }}>
          <Tooltip content="Lorem ipsum dolor sit amet">
            <Badge>Info</Badge>
          </Tooltip>
        </ThemeProvider>
      );
    },
    {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Own theme",
    () => {
      const orbitTheme = object("orbitTheme", {
        palette: {
          product: {
            light: "#ff9999",
            lightHover: "#ff7f7f",
            lightActive: "#ff6666",
            normal: "#ff0000",
            normalHover: "#e50000",
            normalActive: "#cc0000",
            dark: "#990000",
            darkHover: "#720000",
            darkActive: "#630000",
            darker: "#530000",
          },
        },
      });
      const customTheme = object("customTheme", { black: "#000" });
      return (
        <ThemeProvider theme={{ orbit: { ...getTokens(orbitTheme), ...customTheme } }}>
          <Button onClick={action("onClick")}>Hello World!</Button>
        </ThemeProvider>
      );
    },
    {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  );
