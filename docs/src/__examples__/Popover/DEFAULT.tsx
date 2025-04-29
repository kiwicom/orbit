import React from "react";
import {
  Popover,
  Button,
  ButtonLink,
  Stack,
  OrbitProvider,
  defaultTheme,
} from "@kiwicom/orbit-components";
import { QuestionCircle } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme}>
      <Popover
        renderInPortal={false}
        ariaLabel="Help and documentation links"
        content={
          <Stack spacing="300">
            <ButtonLink
              external
              type="secondary"
              fullWidth
              href="https://orbit.kiwi/components/popover/react/"
            >
              Reference
            </ButtonLink>
            <ButtonLink
              external
              type="secondary"
              fullWidth
              href="https://orbit.kiwi/components/popover/"
            >
              Guidelines
            </ButtonLink>
          </Stack>
        }
      >
        <Button asComponent="div" circled title="Help" iconLeft={<QuestionCircle />} />
      </Popover>
    </OrbitProvider>
  ),
  exampleKnobs: [
    {
      component: "Popover",
      knobs: [
        { name: "overlapped", type: "boolean", defaultValue: false },
        { name: "opened", type: "boolean", defaultValue: false },
        { name: "renderInPortal", type: "boolean", defaultValue: false },
        { name: "allowOverflow", type: "boolean", defaultValue: false },
        { name: "noPadding", type: "boolean", defaultValue: false },
        { name: "fixed", type: "boolean", defaultValue: false },
        { name: "width", type: "text", defaultValue: "" },
        { name: "maxHeight", type: "text", defaultValue: "" },
        { name: "renderTimeout", type: "number", defaultValue: 0 },
        {
          name: "placement",
          type: "select",
          options: [
            "top",
            "right",
            "bottom",
            "left",
            "top-start",
            "top-end",
            "left-start",
            "left-end",
            "right-start",
            "right-end",
            "auto",
            "auto-start",
            "auto-end",
            "bottom-start",
            "bottom-end",
          ],
        },
        { name: "ariaLabel", type: "text", defaultValue: "Help and documentation links" },
        { name: "ariaLabelledby", type: "text", defaultValue: "" },
      ],
    },
  ],
};
