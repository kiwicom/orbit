import * as React from "react";
import { Stack } from "@kiwicom/orbit-components";
import { css } from "styled-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => {
    const divStyle = css`
      width: "160px",
      height: "40px",
      backgroundColor: ${defaultTheme.orbit.paletteInkLight},
    `;

    return (
      <Stack>
        <div css={divStyle} />
        <div css={divStyle} />
        <div css={divStyle} />
      </Stack>
    );
  },
  info: {
    title: "Default stack",
    description:
      "By default, stacks display columns of their children with medium spacing between them. They are also not flexbox containers without a flex property being defined.",
  },
};
