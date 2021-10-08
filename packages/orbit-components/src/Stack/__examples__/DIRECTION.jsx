// @flow
import * as React from "react";

import defaultTheme from "../../defaultTheme";
import Heading from "../../Heading";
import Stack from "../index";
import Text from "../../Text";

export default {
  Example: (): React.Node => {
    const divStyle = {
      width: "160px",
      height: "40px",
      backgroundColor: defaultTheme.orbit.paletteInkLight,
    };
    return (
      <Stack>
        <Stack>
          <Heading as="h3" type="title3">
            Vertical (the default)
          </Heading>
          <Stack>
            <div style={divStyle}>
              <Text type="white">1</Text>
            </div>
            <div style={divStyle}>
              <Text type="white">2</Text>
            </div>
            <div style={divStyle}>
              <Text type="white">3</Text>
            </div>
          </Stack>
        </Stack>
        <Stack>
          <Heading as="h3" type="title3">
            Vertical reverse
          </Heading>
          <Stack direction="column-reverse">
            <div style={divStyle}>
              <Text type="white">1</Text>
            </div>
            <div style={divStyle}>
              <Text type="white">2</Text>
            </div>
            <div style={divStyle}>
              <Text type="white">3</Text>
            </div>
          </Stack>
        </Stack>
        <Stack>
          <Heading as="h3" type="title3">
            Horizontal
          </Heading>
          <Stack direction="row">
            <div style={divStyle}>
              <Text type="white">1</Text>
            </div>
            <div style={divStyle}>
              <Text type="white">2</Text>
            </div>
            <div style={divStyle}>
              <Text type="white">3</Text>
            </div>
          </Stack>
        </Stack>
        <Stack>
          <Heading as="h3" type="title3">
            Horizontal reverse
          </Heading>
          <Stack direction="row-reverse">
            <div style={divStyle}>
              <Text type="white">1</Text>
            </div>
            <div style={divStyle}>
              <Text type="white">2</Text>
            </div>
            <div style={divStyle}>
              <Text type="white">3</Text>
            </div>
          </Stack>
        </Stack>
      </Stack>
    );
  },
  info: {
    title: "Direction",
    description:
      "Stacks can lay out their children either horizontally <em>or</em> vertically. Each option can be reversed, such as for right-to-left languages.",
  },
};
