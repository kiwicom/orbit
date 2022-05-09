import React from "react";
import { render } from "react-dom";
import { createRouter } from "@nanostores/router";
import { useStore } from "nanostores/react";
import { ThemeProvider } from "@kiwicom/orbit-components";
import { defaultTheme } from "@kiwicom/orbit-design-tokens";

import LockScrolling from "./pages/lock-scrolling";
import MediaQueries from "./pages/media-queries";
import ModalFooter from "./pages/modal-footer";

interface Routes {
  lockScrolling: void;
  mediaQueries: void;
  modalFooter: void;
}

const router = createRouter<Routes>({
  lockScrolling: "/lock-scrolling",
  mediaQueries: "/media-queries",
  modalFooter: "/modal-footer",
});

function PageNotFound() {
  return <div>404</div>;
}

function App() {
  const page = useStore(router);

  if (!page) {
    return <PageNotFound />;
  }

  switch (page.route) {
    case "lockScrolling":
      return (
        <ThemeProvider
          theme={{
            ...defaultTheme,
            lockScrollingBarGap: true,
            orbit: defaultTheme,
            // eslint-disable-next-line no-restricted-globals
            lockScrolling: location.search === "?disabled" ? false : undefined,
          }}
        >
          <LockScrolling />
        </ThemeProvider>
      );
    case "mediaQueries":
      return (
        <ThemeProvider theme={{ orbit: defaultTheme }}>
          <MediaQueries />
        </ThemeProvider>
      );
    case "modalFooter":
      return (
        <ThemeProvider theme={{ orbit: defaultTheme }}>
          <ModalFooter />
        </ThemeProvider>
      );
    default:
      return <PageNotFound />;
  }
}

render(<App />, document.querySelector("#app"));
