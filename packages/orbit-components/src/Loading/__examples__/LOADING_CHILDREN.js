// @flow
import * as React from "react";

import Button from "../../Button";
import Loading from "../index";
import Stack from "../../Stack";
import Text from "../../Text";

export default {
  Example: (): React.Node => {
    const [loadingNow, setLoadingNow] = React.useState(true);
    return (
      <Stack direction="column">
        <Loading loading={loadingNow} type="inlineLoader" text="Saving your request">
          <Text>Your request has been saved!</Text>
        </Loading>
        <Loading loading={loadingNow} type="inlineLoader" text="Saving your request" />
        <Button onClick={() => setLoadingNow(!loadingNow)}>Toggle loading</Button>
      </Stack>
    );
  },
  info: {
    title: "Loading",
    description:
      "Use the <code>loading</code> prop to hide or show children. Loading components without children are always shown, regardless of the <code>loading</code> prop.",
  },
};
