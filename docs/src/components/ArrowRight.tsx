import React from "react";
import { ArrowUp } from "@kiwicom/orbit-components/icons";
import { css } from "styled-components";

export default function ArrowRight(props: React.ComponentProps<typeof ArrowUp>) {
  return (
    <span
      css={css`
        svg {
          transform: rotate(90deg);
        }
      `}
    >
      <ArrowUp {...props} />
    </span>
  );
}
