import React from "react";
import { ThemeProvider } from "@kiwicom/orbit-components";
import styled from "styled-components";
import theme from "../theme";

const Container = styled.div`
  padding: 2rem;
`;

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Container>{children}</Container>
    </ThemeProvider>
  );
}
