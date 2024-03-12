import { keyframes } from "styled-components";

/**
 * @deprecated This utility is deprecated and will be removed in future versions.
 * Please use an alternative solution.
 */
const toggleUp = (contentHeight: number) => keyframes`
  0% { max-height: ${contentHeight}px; opacity: 1 }
  100% { max-height: 0; opacity: 0 }
`;

export default toggleUp;
