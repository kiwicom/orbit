import { mediaQueries } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

export default Wrapper;

export const WrapperMobile = styled.div`
  ${mediaQueries.desktop(css`
    display: none;
  `)};
`;

export const WrapperDesktop = styled.div`
  display: none;
  ${mediaQueries.desktop(css`
    display: block;
    width: 22ch;
    flex-shrink: 0;
    margin-top: -6px;
  `)}
`;
