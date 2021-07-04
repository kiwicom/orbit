import React from "react";
import { ThemeProvider } from "@kiwicom/orbit-components";
import styled from "styled-components";
import { WindowLocation } from "@reach/router";

import theme from "../theme";
import BaseStyles from "./BaseStyles";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "./Head";
import { DevModeProvider } from "../hooks/useDevMode";
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
  path: string;
  isHome?: boolean;
}

export default function Layout({ children, location, title, description, path, isHome }: Props) {
  return (
    <>
      <Head title={title} hasSiteName={!isHome} description={description} path={path} />
      <ThemeProvider theme={theme}>
        <StyledWrapper>
          <DevModeProvider>
            <BaseStyles />
            <Navbar location={location} />
            <StyledMain>{children}</StyledMain>
            <Footer />
          </DevModeProvider>
        </StyledWrapper>
      </ThemeProvider>
    </>
  );
}
