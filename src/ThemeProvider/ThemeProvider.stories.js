// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import useTranslate from "../hooks/useTranslate";
import Button from "../Button";
import getTokens from "../getTokens";
import languages from "../data/dictionary";

import ThemeProvider from "./index";

const ButtonWithTranslation = () => {
  const translate = useTranslate();
  return <Button>{translate("button_close")}</Button>;
};

storiesOf("ThemeProvider", module).add(
  "Dictionary context",
  () => {
    const dictionary = select("dictionary", Object.keys(languages));
    return (
      <ThemeProvider
        theme={{ orbit: getTokens() }}
        offTransitions
        dictionary={languages[dictionary]}
      >
        <ButtonWithTranslation />
      </ThemeProvider>
    );
  },
  {
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
);
