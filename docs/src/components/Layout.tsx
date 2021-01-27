import React from "react";
import { ThemeProvider } from "@kiwicom/orbit-components";
import styled from "styled-components";

import theme from "../theme";
import Navbar from "./Navbar";

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
  padding: 2rem;
`;

const StyledFooter = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <Navbar />
        <StyledMain>{children}</StyledMain>
        <StyledFooter />
      </StyledWrapper>
    </ThemeProvider>
  );
}
