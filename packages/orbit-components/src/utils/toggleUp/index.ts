import { keyframes } from "styled-components";

const toggleUp = (contentHeight: number) => keyframes`
  0% { max-height: ${contentHeight}px; opacity: 1 }
  100% { max-height: 0; opacity: 0 }
`;

export default toggleUp;
