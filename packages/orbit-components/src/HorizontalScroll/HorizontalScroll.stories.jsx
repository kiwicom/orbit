// @flow
import * as React from "react";
import { select, number, boolean, text } from "@storybook/addon-knobs";

import { SPACINGS } from "../utils/layout/consts";
import Box from "../Box";
import Text from "../Text";
import Stack from "../Stack";

import HorizontalScroll from ".";

export default {
  title: "HorizontalScroll",
};

export const Default = (): React.Node => {
  const spacing = select("Spacing", [null, ...Object.values(SPACINGS)], SPACINGS.XXXSMALL);
  const overflowElevation = boolean("overflowElevation", true);
  const elevationColor = text("elevationColor", "#000");

  return (
    <HorizontalScroll
      spacing={spacing}
      overflowElevation={overflowElevation}
      elevationColor={elevationColor}
    >
      {Array(...Array(10)).map((_, key) => (
        <Box
          // eslint-disable-next-line react/no-array-index-key
          key={key}
          display="flex"
          justify="center"
          minWidth="150px"
          background="cloudLight"
          height="full"
        >
          <Text size="large" weight="bold" as="div">
            <div
              style={{
                height: "50px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {key}
            </div>
          </Text>
        </Box>
      ))}
    </HorizontalScroll>
  );
};

export const NoScroll = (): React.Node => {
  const spacing = select("Spacing", [null, ...Object.values(SPACINGS)], SPACINGS.XXXSMALL);

  return (
    <Stack>
      <Text>
        Horizontal scroll turns on only if elements inside are wider than parent container
      </Text>
      <HorizontalScroll spacing={spacing}>
        {Array(...Array(5)).map((_, key) => (
          <Box
            // eslint-disable-next-line react/no-array-index-key
            key={key}
            display="flex"
            justify="center"
            minWidth="150px"
            background="cloudLight"
            height="full"
          >
            <Text size="large" weight="bold" as="div">
              <div
                style={{
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {key}
              </div>
            </Text>
          </Box>
        ))}
      </HorizontalScroll>
    </Stack>
  );
};

export const withScrollSnap = (): React.Node => {
  const scrollSnapAlign = select("scrollSnapAlign", ["none", "start", "end", "center"], "start");
  const scrollSnap = select(
    "scrollSnapType",
    ["none", "inline", "mandatory", "proximity"],
    "mandatory",
  );
  const scrollPadding = number("scrollPadding", 0);
  const overflowElevation = boolean("overflowElevation", false);
  const elevationColor = text("elevationColor", "paletteCloudDarker");

  return (
    <HorizontalScroll
      scrollSnap={scrollSnap}
      scrollPadding={scrollPadding}
      overflowElevation={overflowElevation}
      elevationColor={elevationColor}
    >
      {Array(...Array(10)).map((_, key) => (
        <div
          style={{
            scrollSnapAlign,
            width: "150px",
            display: "flex",
            justifyContent: "center",
            height: "50px",
            background: "#ccc",
          }}
        >
          <Text size="large" weight="bold" as="div">
            <div
              style={{
                height: "50px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {key}
            </div>
          </Text>
        </div>
      ))}
    </HorizontalScroll>
  );
};
