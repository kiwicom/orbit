import React from "react";
import assocPath from "ramda/src/assocPath";
import { hot } from "react-hot-loader";
import styled, { createGlobalStyle } from "styled-components";
import getTokens from "@kiwicom/orbit-components/lib/getTokens";
import ThemeProvider from "@kiwicom/orbit-components/lib/ThemeProvider";

import Components from "./Components";
import Tabs from "./Tabs";
import ColorContext from "./ColorContext";
import { DEFAULT_COLORS } from "./consts";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    min-height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    height: 100%;
  }
`;

const StyledApp = styled.div`
  min-height: 100%;
  display: flex;
`;

const App = () => {
  const [colors, setColors] = React.useState(DEFAULT_COLORS);

  const setColor = React.useCallback(
    (flatObjectKey, color) => {
      if (flatObjectKey && color) {
        const flatToDeep = flatObjectKey.split(".");
        const newColors = assocPath(flatToDeep, color.hex, colors);
        setColors(newColors);
      }
    },
    [colors],
  );

  const resetColors = React.useCallback(() => {
    setColors(DEFAULT_COLORS);
  }, []);

  return (
    <StyledApp>
      <GlobalStyle />
      <ColorContext.Provider
        value={{
          colors,
          setColor,
          resetColors,
        }}
      >
        <>
          <ThemeProvider
            theme={{
              orbit: getTokens({
                base: {
                  fontFamily:
                    '"Circular Pro", -apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;',
                },
              }),
            }}
          >
            <Tabs />
          </ThemeProvider>
          <ThemeProvider
            theme={{
              orbit: getTokens({
                palette: colors,
                base: {
                  fontFamily:
                    '"Circular Pro", -apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;',
                },
              }),
            }}
          >
            <Components />
          </ThemeProvider>
        </>
      </ColorContext.Provider>
    </StyledApp>
  );
};

export default hot(module)(App);
