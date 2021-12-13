// @flow
import * as React from "react";
import { text, select, number } from "@storybook/addon-knobs";

import Button from "../Button";
import Notification from "../icons/Notification";

import ToastInit, { createToast, createToastPromise } from ".";

export default {
  title: "Toast",
};

const PLACEMENTS = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

export const Default = (): React.Node => {
  const toast = () =>
    createToast(
      text(
        "message",
        "When the Tooth fairy comes to your house she takes your tooth and gives you money. When Chuck Norris comes to your house he breaks your tooth and takes your money.",
      ),
      { icon: <Notification /> },
    );

  const placement = select("placement", PLACEMENTS, "top-center");
  const topOffset = number("topOffset", 8);
  const bottomOffset = number("bottomOffset", 8);
  const leftOffset = number("leftOffset", 8);
  const rightOffset = number("rightOffset", 8);
  const dismissTimeout = number("dismissTimeout", 5000);
  const gutter = number("gutter", 8);

  return (
    <>
      <Button onClick={toast}>Add toast</Button>
      <ToastInit
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

export const WithPromise = (): React.Node => {
  const promise = new Promise((res, rej) => {
    setTimeout(Math.random() > 0.5 ? res : rej, 3000);
  });

  const notify = () =>
    createToastPromise(promise, {
      icon: <Notification />,
      loading: "...Loading",
      success: "Freddy Krueger has nightmares about Chuck Norris!",
      error: "Chuck did not come",
    });

  return (
    <>
      <Button onClick={notify}>Add toast</Button>
      <ToastInit />
    </>
  );
};
