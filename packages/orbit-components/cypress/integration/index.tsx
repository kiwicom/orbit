import React from "react";
import { createRoot } from "react-dom/client";
import { createRouter } from "@nanostores/router";
import { useStore } from "@nanostores/react";
import { OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

import LockScrolling from "./pages/lock-scrolling";
import MediaQueries from "./pages/media-queries";
import ModalFooter from "./pages/modal-footer";
import BoxMediaProps from "./pages/box-mediaquery-props";
import StackMediaProps from "./pages/stack-mediaquery-props";
import TextStyles from "./pages/text-styles";
import TextLinkStyles from "./pages/text-link-styles";
import NavigationBar from "./pages/navigation-bar";

const router = createRouter({
  lockScrolling: "/lock-scrolling",
  mediaQueries: "/media-queries",
  modalFooter: "/modal-footer",
  boxMediaProps: "/box-media-props",
  stackMediaProps: "/stack-media-props",
  textStyles: "/text-styles",
  textLinkStyles: "/text-link-styles",
  navigationBar: "/navigation-bar",
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
          useId={React.useId}
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
        <OrbitProvider useId={React.useId} theme={defaultTheme}>
          <MediaQueries />
        </OrbitProvider>
      );
    case "modalFooter":
      return (
        <OrbitProvider useId={React.useId} theme={defaultTheme}>
          <ModalFooter />
        </OrbitProvider>
      );
    case "boxMediaProps":
      return (
        <OrbitProvider theme={defaultTheme}>
          <BoxMediaProps />
        </OrbitProvider>
      );
    case "stackMediaProps":
      return (
        <OrbitProvider theme={defaultTheme}>
          <StackMediaProps />
        </OrbitProvider>
      );
    case "textStyles":
      return (
        <OrbitProvider theme={defaultTheme}>
          <TextStyles />
        </OrbitProvider>
      );
    case "textLinkStyles":
      return (
        <OrbitProvider theme={defaultTheme}>
          <TextLinkStyles />
        </OrbitProvider>
      );
    case "navigationBar":
      return (
        <OrbitProvider theme={defaultTheme}>
          <NavigationBar />
        </OrbitProvider>
      );
    default:
      return <PageNotFound />;
  }
}

const container = document.getElementById("app");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
