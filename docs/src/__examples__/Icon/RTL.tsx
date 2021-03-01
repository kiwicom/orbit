import * as React from "react";
import RenderInRtl from "@kiwicom/orbit-components/lib/utils/rtl/RenderInRtl";
import { Stack } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/lib/icons";

export default {
  Example: () => (
    <Stack flex>
      <RenderInRtl>
        <Icons.Airplane ariaLabel="Airplane" />
      </RenderInRtl>
      <RenderInRtl>
        <Icons.Airplane reverseOnRtl ariaLabel="Airplane" />
      </RenderInRtl>
    </Stack>
  ),
  info: {
    title: "Right-to-left icons",
    description:
      "Within right-to-left settings, icons will also reverse direction if they are passed the reverseOnRtl prop.",
  },
};
