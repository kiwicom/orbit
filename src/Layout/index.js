// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mq from "../utils/mediaQuery";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  -ms-grid-columns: 1fr;
  grid-gap: 24px;
  padding: 0 24px;
  box-sizing: border-box;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;

  ${mq.tablet(css`
    grid-template-columns: minmax(256px, 3fr) 7fr;
    -ms-grid-columns: minmax(256px, 3fr) 7fr;
  `)};

  ${mq.largeDesktop(css`
    grid-template-columns: 256px 1fr 256px;
    -ms-grid-columns: 256px 1fr 256px;
  `)};
`;

const Layout = ({ children }: any) => <StyledLayout>{children}</StyledLayout>;

export default Layout;
