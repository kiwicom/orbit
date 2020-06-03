// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, number, boolean, select } from "@storybook/addon-knobs";

import orbited from "./index";

/* const StyledDiv = orbited.div(
  ({ css }) => css`
    color: green;
  `,
  () => ({
    as: props => {
      console.log(props);
      return <ol {...props} />;
    },
    blockList: ["type"],
  }),
); */

storiesOf("core", module)
  .add(
    "Default",
    () => {
      const Box = orbited.div(
        ({ css, theme }) => css`
          color: ${theme.orbit.paletteRedNormal};
        `,
      );
      return <Box>Hello world</Box>;
    },
    {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "With mediaQueries",
    () => {
      const Box = orbited.span(
        ({ css, theme, largeMobile }) => css`
          color: ${theme.orbit.paletteRedNormal};
          ${largeMobile`
            color: ${theme.orbit.paletteGreenNormal};
          `};
        `,
        ({ width }) => ({
          as: "span",
          attrs: { style: { width } },
          blockList: ["width"],
        }),
      );
      return <Box>Hello world</Box>;
    },
    {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "With options",
    () => {
      const Box = orbited(
        ({ css, theme, largeMobile }) => css`
          color: ${theme.orbit.paletteRedNormal};
          ${largeMobile`
            color: ${theme.orbit.paletteGreenNormal};
          `};
        `,
        ({ width }) => ({
          as: "span",
          attrs: { style: { width } },
          blockList: ["width"],
        }),
      );
      return (
        <Box width="200px" tabIndex="0">
          Hello world
        </Box>
      );
    },
    {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  );
