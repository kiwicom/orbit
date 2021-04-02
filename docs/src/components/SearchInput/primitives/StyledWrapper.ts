import styled from "styled-components";
import { Button } from "@kiwicom/orbit-components";

interface Props extends Pick<React.ComponentProps<typeof Button>, "size"> {}

const StyledWrapper = styled.div<Props>`
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
