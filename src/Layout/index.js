// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mq from "../utils/mediaQuery";
import defaultTheme from "../defaultTheme";

const SearchLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  -ms-grid-columns: 1fr;
  grid-gap: 16px;
  padding: 0 16px;
  box-sizing: border-box;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  ${mq.tablet(css`
    grid-template-columns: minmax(256px, 3fr) 7fr;
    -ms-grid-columns: minmax(256px, 3fr) 7fr;
  `)};

  ${mq.desktop(css`
    grid-gap: 24px;
    padding: 24px;
  `)};

  ${mq.largeDesktop(css`
    grid-template-columns: 256px 1fr 288px;
    -ms-grid-columns: 256px 1fr 288px;
  `)};
`;

SearchLayout.defaultProps = {
  theme: defaultTheme,
};

const BookingLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  -ms-grid-columns: 1fr;
  grid-gap: 16px;
  padding: 0 16px;
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  ${mq.tablet(css`
    grid-template-columns: 7fr minmax(272px, 3fr);
    -ms-grid-columns: 7fr minmax(272px, 3fr);
  `)};

  ${mq.desktop(css`
    grid-gap: 24px;
    padding: 24px;
  `)};
`;

BookingLayout.defaultProps = {
  theme: defaultTheme,
};

const MMBLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  -ms-grid-columns: 1fr;
  grid-gap: 16px;
  padding: 0 16px;
  box-sizing: border-box;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;

  ${mq.desktop(css`
    grid-gap: 24px;
    padding: 24px;
  `)};
`;

MMBLayout.defaultProps = {
  theme: defaultTheme,
};

const Layout = ({ children, type }: any) => {
  if (type === "SearchLayout") {
    return <SearchLayout>{children}</SearchLayout>;
  }
  if (type === "BookingLayout") {
    return <BookingLayout>{children}</BookingLayout>;
  }
  return <MMBLayout>{children}</MMBLayout>;
};

export default Layout;
