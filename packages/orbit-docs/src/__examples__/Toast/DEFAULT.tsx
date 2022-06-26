import React from "react";
import { Button, ToastRoot, createToast } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <>
      <ToastRoot dismissTimeout={5000} placement="top-center" />
      <Button onClick={() => createToast("ToastMessage")}>Add toast</Button>
    </>
  ),
  exampleKnobs: [
    {
      component: "ToastRoot",
      knobs: [
        {
          name: "dismissTimeout",
          type: "number",
          defaultValue: 5000,
        },
        {
          name: "topOffset",
          type: "number",
          defaultValue: 8,
        },
        {
          name: "bottomOffset",
          type: "number",
          defaultValue: 8,
        },
        {
          name: "leftOffset",
          type: "number",
          defaultValue: 8,
        },
        {
          name: "rightOffset",
          type: "number",
          defaultValue: 8,
        },
        {
          name: "gutter",
          type: "number",
          defaultValue: 8,
        },
        {
          name: "placement",
          type: "select",
          defaultValue: "top-right",
          options: [
            "top-left",
            "top-center",
            "top-right",
            "bottom-left",
            "bottom-center",
            "bottom-right",
          ],
        },
      ],
    },
  ],
};
