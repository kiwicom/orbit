// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, number, boolean, select } from "@storybook/addon-knobs";

import orbited from "./index";

storiesOf("core", module).add(
  "Default",
  () => {
    /*    const Box = orbited(
      ({ css }) => css`
        color: red;
      `,
      ({ as, width }) => ({
        as,
        attrs: { styles: { width } },
      }),
    ); */
    const StyledDiv = orbited.div(
      ({ css }) => css`
        color: green;
      `,
      () => ({
        blockList: ["type"],
      }),
    );
    return (
      <>
        <StyledDiv type="ahoj" className="ahoj">
          kokot
        </StyledDiv>
      </>
    );
  },
  {
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
);
