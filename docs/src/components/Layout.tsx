import React from "react";
import { ThemeProvider } from "@kiwicom/orbit-components";
import styled from "styled-components";
import { WindowLocation } from "@reach/router";

import defaultTheme from "../theme";
import Navbar from "./Navbar";
import { CONTENT_PADDING } from "../consts";

const StyledWrapper = styled.div`
  display: grid;
  position: relative;
  overflow: hidden;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: ${CONTENT_PADDING};
`;

const StyledFooter = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

interface Props {
  children: React.ReactNode;
  location: WindowLocation;
}

export default function Layout({ children, location }: Props) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledWrapper>
        <Navbar location={location} />
        <StyledMain>{children}</StyledMain>
        <StyledFooter />
      </StyledWrapper>
    </ThemeProvider>
  );
}
