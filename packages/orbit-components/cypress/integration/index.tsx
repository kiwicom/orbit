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
import HeadingMediaProps from "./pages/heading-media-query-props";
import GridMediaProps from "./pages/grid-mediaquery-props";

const router = createRouter({
  lockScrolling: "/lock-scrolling",
  mediaQueries: "/media-queries",
  modalFooter: "/modal-footer",
  boxMediaProps: "/box-media-props",
  stackMediaProps: "/stack-media-props",
  textStyles: "/text-styles",
  textLinkStyles: "/text-link-styles",
  navigationBar: "/navigation-bar",
  headingMediaProps: "/heading-media-props",
  gridMediaProps: "/grid-media-props",
});

function PageNotFound() {
  return <div>404</div>;
}

const Tests = ({ route }: { route: string }) => {
  if (route === "lockScrolling") return <LockScrolling />;
  if (route === "mediaQueries") return <MediaQueries />;
  if (route === "modalFooter") return <ModalFooter />;
  if (route === "boxMediaProps") return <BoxMediaProps />;
  if (route === "stackMediaProps") return <StackMediaProps />;
  if (route === "gridMediaProps") return <GridMediaProps />;
  if (route === "navigationBar") return <NavigationBar />;
  if (route === "textStyles") return <TextStyles />;
  if (route === "textLinkStyles") return <TextLinkStyles />;
  if (route === "headingMediaProps") return <HeadingMediaProps />;

  return <PageNotFound />;
};

function App() {
  const page = useStore(router);

  if (!page) return <PageNotFound />;

  return (
    <OrbitProvider
      useId={React.useId}
      theme={{
        ...defaultTheme,
        lockScrollingBarGap: page.route === "lockScrolling",
        lockScrolling: window.location.search === "?disabled" ? false : undefined,
      }}
    >
      <Tests route={page.route} />
    </OrbitProvider>
  );
}

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<App />);
