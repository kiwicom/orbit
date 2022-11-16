import styled, { css } from "styled-components";
import { mediaQueries as mq } from "@kiwicom/orbit-components";

import { MAX_CONTENT_WIDTH } from "../consts";

const HeaderBox = styled.div`
  display: block;
  border-radius: 24px;
  width: 100%;
  max-width: calc(${MAX_CONTENT_WIDTH} - 5rem);
  max-height: 530px;
  margin: 0 auto;

  ${mq.desktop(css`
    position: relative;
    height: 100vh;
    padding: 64px;
    background: linear-gradient(80.68deg, #f1f4f7 7.05%, #f5f7f9 57.05%);
    z-index: 0;
    margin-bottom: -200px;
  `)}
`;

export default HeaderBox;
