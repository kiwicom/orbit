import React from "react";
import { ThemeProvider } from "@kiwicom/orbit-components";
import styled from "styled-components";
import { WindowLocation } from "@reach/router";

import defaultTheme from "../theme";
import { DevModeProvider } from "../hooks/useDevMode";
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
}

export default function Layout({ children, location }: Props) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DevModeProvider>
        <StyledWrapper>
          <Navbar location={location} />
          <StyledMain>{children}</StyledMain>
          <Footer />
        </StyledWrapper>
      </DevModeProvider>
    </ThemeProvider>
  );
}
