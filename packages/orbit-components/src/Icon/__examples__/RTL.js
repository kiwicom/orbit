// @flow
import * as React from "react";

import RenderInRtl from "../../utils/rtl/RenderInRtl";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
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
