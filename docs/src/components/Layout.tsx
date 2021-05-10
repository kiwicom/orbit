import React from "react";
import { ThemeProvider } from "@kiwicom/orbit-components";
import styled from "styled-components";
import { WindowLocation } from "@reach/router";
import { Helmet } from "react-helmet";

import defaultTheme from "../theme";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CONTENT_PADDING } from "../consts";

const StyledWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  padding: ${CONTENT_PADDING};
`;

interface Props {
  children: React.ReactNode;
  location: WindowLocation;
  title: string;
  description?: string;
}

export default function Layout({ children, location, title, description }: Props) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      <ThemeProvider theme={defaultTheme}>
        <StyledWrapper>
          <Navbar location={location} />
          <StyledMain>{children}</StyledMain>
          <Footer />
        </StyledWrapper>
      </ThemeProvider>
    </>
  );
}
