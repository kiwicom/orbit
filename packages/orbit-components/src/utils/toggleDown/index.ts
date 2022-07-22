import { keyframes } from "styled-components";

const toggleDown = (contentHeight: number) => keyframes`
  0% { max-height: 0; opacity: 0; overflow: hidden }
  100% { max-height: ${contentHeight}px; opacity: 1; overflow: visible }
`;

export default toggleDown;
