import * as React from "react";
import { text, select, number } from "@storybook/addon-knobs";

import Button from "../Button";
import Notification from "../icons/Notification";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import { ToastRoot, createToast, createToastPromise } from ".";

export default {
  title: "Toast",
};

enum PLACEMENTS {
  TOP_LEFT = "top-left",
  TOP_CENTER = "top-center",
  TOP_RIGHT = "top-right",
  BOTTOM_LEFT = "bottom-left",
  BOTTOM_CENTER = "bottom-center",
  BOTTOM_RIGHT = "bottom-right",
}

export const Default = () => {
  const toast = () =>
    createToast(text("message", "Thank you for feedback"), { icon: <Notification /> });

  const placement = select("placement", Object.values(PLACEMENTS), PLACEMENTS.TOP_CENTER);
  const topOffset = number("topOffset", 8);
  const bottomOffset = number("bottomOffset", 8);
  const leftOffset = number("leftOffset", 8);
  const rightOffset = number("rightOffset", 8);
  const dismissTimeout = number("dismissTimeout", 5000);
  const gutter = number("gutter", 8);

  return (
    <>
      <Button onClick={toast}>Add toast</Button>
      <ToastRoot
        placement={placement}
        dismissTimeout={dismissTimeout}
        topOffset={topOffset}
        gutter={gutter}
        bottomOffset={bottomOffset}
        leftOffset={leftOffset}
        rightOffset={rightOffset}
      />
    </>
  );
};

export const WithPromise = () => {
  const notify = () => {
    const promise = new Promise((res, rej) => {
      setTimeout(Math.random() > 0.5 ? res : rej, 3000);
    });

    createToastPromise(promise, {
      icon: Notification,
      loading: "...Loading",
      success: "Freddy Krueger has nightmares about Chuck Norris!",
      error: "Chuck did not come",
    });
  };

  return (
    <>
      <Button onClick={notify}>Add toast</Button>
      <ToastRoot />
    </>
  );
};

export const RTL = () => {
  const toast = () =>
    createToast(
      text(
        "message",
        "When the Tooth fairy comes to your house she takes your tooth and gives you money. When Chuck Norris comes to your house he breaks your tooth and takes your money.",
      ),
      { icon: <Notification /> },
    );

  return (
    <RenderInRtl>
      <>
        <Button onClick={toast}>Add toast</Button>
        <ToastRoot />
      </>
    </RenderInRtl>
  );
};
