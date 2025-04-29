import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { getTokens, OrbitProvider } from "@kiwicom/orbit-components";

import { assocPath } from "./helpers";
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

  const value = React.useMemo(
    () => ({ colors, setColor, resetColors }),
    [colors, setColor, resetColors],
  );

  return (
    <StyledApp>
      <GlobalStyle />
      <ColorContext.Provider value={value}>
        <>
          <OrbitProvider
            theme={{
              orbit: getTokens({
                fontFamily: {
                  base: '"Circular Pro", -apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;',
                },
              }),
            }}
          >
            <Tabs />
          </OrbitProvider>
          <OrbitProvider
            theme={{
              orbit: getTokens({
                palette: colors,
                fontFamily: {
                  base: '"Circular Pro", -apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;',
                },
              }),
            }}
          >
            <Components />
          </OrbitProvider>
        </>
      </ColorContext.Provider>
    </StyledApp>
  );
};

export default App;
