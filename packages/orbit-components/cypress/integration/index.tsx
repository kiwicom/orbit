import React from "react";
import { render } from "react-dom";
import { createRouter } from "@nanostores/router";
import { useStore } from "nanostores/react";

import { ThemeProvider, defaultTheme } from "../../src";
import LockScrolling from "./pages/lock-scrolling";
import ModalFooter from "./pages/modal-footer";

interface Routes {
  lockScrolling: void;
  modalFooter: void;
}

const router = createRouter<Routes>({
  lockScrolling: "/lock-scrolling",
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
            // eslint-disable-next-line no-restricted-globals
            lockScrolling: location.search === "?disabled" ? false : undefined,
          }}
        >
          <LockScrolling />
        </ThemeProvider>
      );
    case "modalFooter":
      return (
        <ThemeProvider theme={defaultTheme}>
          <ModalFooter />
        </ThemeProvider>
      );
    default:
      return <PageNotFound />;
  }
}

render(<App />, document.querySelector("#app"));
