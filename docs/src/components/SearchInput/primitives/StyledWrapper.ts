import styled from "styled-components";
import { Button } from "@kiwicom/orbit-components";

export enum Size {
  Regular,
  Large,
}

const StyledWrapper = styled.div<{ size: React.ComponentProps<typeof Button>["size"] }>`
  position: relative;
  max-width: 24em; /* so that the placeholder fits in */
  ${({ size }) =>
    size === "large" &&
    `
      button {
        /* to match the height of the large ButtonLink on the landing page */
        width: 64px;
        height: 64px;
      }
    `}
`;

export default StyledWrapper;
