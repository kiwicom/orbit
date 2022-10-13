import React from "react";
import { render } from "react-dom";
import { createRouter } from "@nanostores/router";
import { useStore } from "@nanostores/react";
import { OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

import LockScrolling from "./pages/lock-scrolling";
import MediaQueries from "./pages/media-queries";
import ModalFooter from "./pages/modal-footer";

const router = createRouter({
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
        <OrbitProvider
          theme={{
            ...defaultTheme,
            lockScrollingBarGap: true,
            // eslint-disable-next-line no-restricted-globals
            lockScrolling: location.search === "?disabled" ? false : undefined,
          }}
        >
          <LockScrolling />
        </OrbitProvider>
      );
    case "mediaQueries":
      return (
        <OrbitProvider theme={defaultTheme}>
          <MediaQueries />
        </OrbitProvider>
      );
    case "modalFooter":
      return (
        <OrbitProvider theme={defaultTheme}>
          <ModalFooter />
        </OrbitProvider>
      );
    default:
      return <PageNotFound />;
  }
}

render(<App />, document.querySelector("#app"));
