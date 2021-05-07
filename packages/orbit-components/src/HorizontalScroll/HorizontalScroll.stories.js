// @flow
import * as React from "react";

import Box from "../Box";
import Text from "../Text";

import HorizontalScroll from "./index";

export default {
  title: "HorizontalScroll",
};

export const Default = (): React.Node => {
  return (
    <HorizontalScroll>
      {Array(...Array(10)).map((_, key) => (
        <Box
          // eslint-disable-next-line react/no-array-index-key
          key={key}
          display="flex"
          justify="center"
          minWidth="150px"
          background="cloudDark"
          height="full"
        >
          <Text size="large" weight="bold" as="div">
            <div style={{ height: "50px", display: "flex", alignItems: "center" }}>{key}</div>
          </Text>
        </Box>
      ))}
    </HorizontalScroll>
  );
};
