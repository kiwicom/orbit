import styled from "styled-components";
import { rtlSpacing } from "@kiwicom/orbit-components/lib/utils/rtl";

const StyledPreffix = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  z-index: 3;
  padding: ${rtlSpacing(`0 18px 0 0`)};

  & > svg {
    height: 20px;
    width: 20px;
  }
`;

export default StyledPreffix;
