import * as React from "react";

import Button from "../../Button";

import TooltipPrimitive from ".";

export default {
  title: "MobileDialogPrimitive",
};

export const Playground = ({
  content,
  dataTest,
  tabIndex,
  enabled,
  stopPropagation,
  removeUnderlinedText,
  labelClose,
}) => {
  return (
    <TooltipPrimitive
      content={content}
      dataTest={dataTest}
      tabIndex={tabIndex}
      labelClose={labelClose}
      enabled={enabled}
      stopPropagation={stopPropagation}
      removeUnderlinedText={removeUnderlinedText}
    >
      <Button>Open Mobile Dialog</Button>
    </TooltipPrimitive>
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  content: "Write your text here.",
  dataTest: "test",
  tabIndex: 0,
  enabled: true,
  stopPropagation: true,
  removeUnderlinedText: false,
  labelClose: "Close",
};
