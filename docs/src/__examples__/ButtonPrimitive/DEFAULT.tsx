import React from "react";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";
import { AirplaneTakeoff } from "@kiwicom/orbit-components/icons";
import ButtonPrimitive from "@kiwicom/orbit-components/lib/primitives/ButtonPrimitive";

export default {
  Example: () => (
    <ButtonPrimitive
      background="linear-gradient(264.15deg, #FC8D3E 0%, #F16E5B 100%)"
      foreground={defaultTheme.orbit.colorTextWhite}
      iconLeft={<AirplaneTakeoff />}
      padding={defaultTheme.orbit.paddingButtonNormal}
    >
      Click me
    </ButtonPrimitive>
  ),
  exampleKnobs: [
    {
      component: "ButtonPrimitive",
      knobs: [
        {
          name: "iconLeft",
          type: "icon",
          defaultValue: "AirplaneTakeoff",
        },
        {
          name: "iconRight",
          type: "icon",
          defaultValue: "",
        },
        {
          name: "icons",
          type: "icon",
          defaultValue: "",
        },
        {
          name: "submit",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "fullWidth",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "title",
          type: "text",
          defaultValue: "",
        },
        {
          name: "height",
          type: "text",
          defaultValue: "",
        },
        {
          name: "boxShadow",
          type: "text",
          defaultValue: "",
        },
        {
          name: "boxShadowHover",
          type: "text",
          defaultValue: "",
        },
        {
          name: "boxShadowActive",
          type: "text",
          defaultValue: "",
        },
        {
          name: "boxShadowFocus",
          type: "text",
          defaultValue: "",
        },
        {
          name: "contentWidth",
          type: "text",
          defaultValue: "",
        },
        {
          name: "circled",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "contentAlign",
          type: "text",
          defaultValue: "center",
        },
        {
          name: "href",
          type: "text",
          defaultValue: "",
        },
        {
          name: "width",
          type: "text",
          defaultValue: "",
        },
        {
          name: "fontSize",
          type: "text",
          defaultValue: "",
        },
        {
          name: "fontWeight",
          type: "text",
          defaultValue: "",
        },
        { name: "padding", type: "text", defaultValue: "12px" },
        {
          name: "background",
          type: "text",
          defaultValue: "linear-gradient(264.15deg, #FC8D3E 0%, #F16E5B 100%)",
        },
        {
          name: "backgroundHover",
          type: "text",
          defaultValue: "",
        },
        {
          name: "backgroundActive",
          type: "text",
          defaultValue: "",
        },
        {
          name: "backgroundFocus",
          type: "text",
          defaultValue: "",
        },
        {
          name: "foreground",
          type: "text",
          defaultValue: "#fff",
        },
        {
          name: "foregroundHover",
          type: "text",
          defaultValue: "",
        },
        {
          name: "foregroundFocus",
          type: "text",
          defaultValue: "",
        },
        {
          name: "foregroundActive",
          type: "text",
          defaultValue: "",
        },
      ],
    },
  ],
};
