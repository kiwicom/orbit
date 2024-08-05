import * as React from "react";

import { SPACINGS } from "../utils/layout/consts";
import Box from "../Box";
import Text from "../Text";
import Stack from "../Stack";

import HorizontalScroll from ".";

Box.displayName = "Box";
HorizontalScroll.displayName = "HorizontalScroll";

export default {
  title: "HorizontalScroll",
};

export const Default = ({ spacing, arrows, overflowElevation, elevationColor, arrowColor }) => {
  return (
    <HorizontalScroll
      spacing={spacing}
      arrows={arrows}
      overflowElevation={overflowElevation}
      elevationColor={elevationColor}
      arrowColor={arrowColor}
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

Default.args = {
  overflowElevation: true,
  elevationColor: "",
  arrows: false,
  arrowColor: "",
  spacing: SPACINGS.FIFTY,
};

Default.argTypes = {
  spacing: {
    options: Object.values(SPACINGS),
    control: {
      type: "select",
    },
  },
};

export const NoScroll = ({ spacing }) => {
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

NoScroll.args = {
  spacing: SPACINGS.FIFTY,
};

NoScroll.argTypes = {
  spacing: {
    options: Object.values(SPACINGS),
    control: {
      type: "select",
    },
  },
};

export const WithScrollSnap = ({
  scrollSnap,
  scrollPadding,
  overflowElevation,
  elevationColor,
  scrollSnapAlign,
}) => {
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

WithScrollSnap.args = {
  scrollSnapAlign: "start",
  scrollSnapType: "mandatory",
  scrollPadding: 0,
  overflowElevation: false,
  elevationColor: "paletteCloudDarker",
};

WithScrollSnap.argTypes = {
  scrollSnapAlign: {
    options: ["none", "start", "end", "center"],
    control: {
      type: "select",
    },
  },
  scrollSnapType: {
    options: ["none", "inline", "mandatory", "proximity"],
    control: {
      type: "select",
    },
  },
};
