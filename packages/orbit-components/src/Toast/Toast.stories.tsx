import * as React from "react";

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

export const Default = ({
  message,
  placement,
  topOffset,
  bottomOffset,
  leftOffset,
  rightOffset,
  dismissTimeout,
  gutter,
}) => {
  const toast = () => createToast(message, { icon: <Notification /> });

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

Default.args = {
  message: "Thank you for feedback",
  placement: PLACEMENTS.TOP_CENTER,
  topOffset: 8,
  bottomOffset: 8,
  leftOffset: 8,
  rightOffset: 8,
  dismissTimeout: 5000,
  gutter: 8,
};

Default.argTypes = {
  placement: {
    options: Object.values(PLACEMENTS),
    control: {
      type: "select",
    },
  },
};

export const WithPromise = () => {
  const notify = () => {
    const promise = new Promise((res, rej) => {
      setTimeout(Math.random() > 0.5 ? res : rej, 3000);
    });

    createToastPromise(
      promise,
      {
        loading: "...Loading",
        success: "Freddy Krueger has nightmares about Chuck Norris!",
        error: "Chuck did not come",
      },
      {
        success: {
          icon: <Notification />,
        },
      },
    );
  };

  return (
    <>
      <Button onClick={notify}>Add toast</Button>
      <ToastRoot />
    </>
  );
};

export const RTL = ({ message }) => {
  const toast = () => createToast(message, { icon: <Notification /> });

  return (
    <RenderInRtl>
      <>
        <Button onClick={toast}>Add toast</Button>
        <ToastRoot />
      </>
    </RenderInRtl>
  );
};

RTL.args = {
  message:
    "When the Tooth fairy comes to your house she takes your tooth and gives you money. When Chuck Norris comes to your house he breaks your tooth and takes your money.",
};
