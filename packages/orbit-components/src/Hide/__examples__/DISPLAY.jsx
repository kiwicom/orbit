// @flow
import * as React from "react";

import Hide from "../index";
import Text from "../../Text";
import Stack from "../../Stack";
import Separator from "../../Separator";

export default {
  Example: (): React.Node => (
    <Stack>
      <Text>This text appears all of the time. Resize to change other text.</Text>
      <Hide on={["largeMobile", "tablet"]}>
        <Text>
          This text and the separator following it appear on small and wide screens&mdash;not large
          mobile and table screens.
        </Text>
      </Hide>
      <Hide block on={["largeMobile", "tablet"]}>
        <Separator />
      </Hide>
      <Hide on={["largeMobile", "tablet"]}>
        <Text>
          This text appears on small and wide screens&mdash;not large mobile and table screens. The
          separator following it has <code>display</code> set to <code>inline-block</code> and so
          does not display.
        </Text>
      </Hide>
      <Hide on={["largeMobile", "tablet"]}>
        <Separator />
      </Hide>
    </Stack>
  ),
  info: {
    title: "Display block",
    description:
      'Hide components display by default as <code>inline-block</code>. Set this to <code>block</code> by passing the <code>block</code> prop. This is especially important for <a href="https://orbit.kiwi/components/separator/">Separator</a> compoennts, which otherwise would not display.',
  },
};
