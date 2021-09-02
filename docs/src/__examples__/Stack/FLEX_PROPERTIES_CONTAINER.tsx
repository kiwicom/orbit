import React from "react";
import { Stack, Heading, Text, TextLink } from "@kiwicom/orbit-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => {
    const divStyle: React.CSSProperties = {
      width: "160px",
      height: "40px",
      backgroundColor: `${defaultTheme.orbit.paletteInkLight}`,
    };

    return (
      <Stack>
        <Stack>
          <Heading as="h2" type="title1">
            Block or inline
          </Heading>
          <Text>Stacks can be set to be displayed as block or inline elements.</Text>
          <Stack>
            <Heading as="h3" type="title2">
              Block
            </Heading>
            <Stack direction="row">
              <div style={divStyle}>
                <Text type="white">Before stack</Text>
              </div>
              <Stack flex>
                <div style={divStyle}>
                  <Text type="white">First in stack</Text>
                </div>
                <div style={divStyle}>
                  <Text type="white">Second in stack</Text>
                </div>
              </Stack>
              <div style={divStyle}>
                <Text type="white">After stack</Text>
              </div>
            </Stack>
          </Stack>
          <Stack>
            <Heading as="h3" type="title2">
              Inline
            </Heading>
            <Stack direction="row">
              <div style={divStyle}>
                <Text type="white">Before stack</Text>
              </div>
              <Stack inline>
                <div style={divStyle}>
                  <Text type="white">First in stack</Text>
                </div>
                <div style={divStyle}>
                  <Text type="white">Second in stack</Text>
                </div>
              </Stack>
              <div style={divStyle}>
                <Text type="white">After stack</Text>
              </div>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Heading as="h2" type="title1">
            Basis
          </Heading>
          <Text>
            Determines the default size of the stack before other space in the flex box is
            distributed. If necessary to see differences, resize the window.
          </Text>
          <Text>
            A basis of <code>auto</code> means relative flex using the item&apos;s content as the
            starting point. A basis of <code>0</code> means an absolute flex starting from 0. See
            more at the{" "}
            <TextLink href="https://www.w3.org/TR/style-flexbox-1/#flex-flex-basis" external>
              specification of <code>flex-basis</code>
            </TextLink>{" "}
            (especially the diagram there).
          </Text>
          <Stack>
            <Heading as="h3" type="title2">
              Auto (the default)
            </Heading>
            <Stack direction="row">
              <div style={divStyle}>
                <Text type="white">Before stack</Text>
              </div>
              <Stack flex basis="auto">
                <div style={divStyle}>
                  <Text type="white">First in stack</Text>
                </div>
                <div style={divStyle}>
                  <Text type="white">Second in stack</Text>
                </div>
              </Stack>
              <div style={divStyle}>
                <Text type="white">After stack</Text>
              </div>
            </Stack>
          </Stack>
          <Stack>
            <Heading as="h3" type="title2">
              0
            </Heading>
            <Stack direction="row">
              <div style={divStyle}>
                <Text type="white">Before stack</Text>
              </div>
              <Stack flex basis="0">
                <div style={divStyle}>
                  <Text type="white">First in stack</Text>
                </div>
                <div style={divStyle}>
                  <Text type="white">Second in stack</Text>
                </div>
              </Stack>
              <div style={divStyle}>
                <Text type="white">After stack</Text>
              </div>
            </Stack>
          </Stack>
          <Stack>
            <Heading as="h3" type="title2">
              Specific number (400 px)
            </Heading>
            <Stack direction="row">
              <div style={divStyle}>
                <Text type="white">Before stack</Text>
              </div>
              <Stack flex basis="400px">
                <div style={divStyle}>
                  <Text type="white">First in stack</Text>
                </div>
                <div style={divStyle}>
                  <Text type="white">Second in stack</Text>
                </div>
              </Stack>
              <div style={divStyle}>
                <Text type="white">After stack</Text>
              </div>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Heading as="h2" type="title1">
            Grow
          </Heading>
          <Text>
            You can set whether stacks will grow to take up extra space in their main direction
            (horizontal by default).
          </Text>
          <Stack>
            <Heading as="h3" type="title2">
              Do grow
            </Heading>
            <Stack direction="row">
              <div style={divStyle}>
                <Text type="white">Before stack</Text>
              </div>
              <Stack inline grow>
                <div style={divStyle}>
                  <Text type="white">In stack</Text>
                </div>
              </Stack>
              <div style={divStyle}>
                <Text type="white">After stack</Text>
              </div>
            </Stack>
          </Stack>
          <Stack>
            <Heading as="h3" type="title2">
              Don&apos;t grow
            </Heading>
            <Stack direction="row">
              <div style={divStyle}>
                <Text type="white">Before stack</Text>
              </div>
              <Stack inline grow={false}>
                <div style={divStyle}>
                  <Text type="white">In stack</Text>
                </div>
              </Stack>
              <div style={divStyle}>
                <Text type="white">After stack</Text>
              </div>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Heading as="h2" type="title1">
            Shrink
          </Heading>
          <Text>
            You can set whether stacks will shrink when their container is too small to hold all its
            items.
          </Text>
          <Stack>
            <Heading as="h3" type="title2">
              Do shrink
            </Heading>
            <div style={{ width: "300px" }}>
              <Stack direction="row">
                <div style={divStyle}>
                  <Text type="white">Before stack</Text>
                </div>
                <Stack inline shrink basis="420px">
                  <div style={divStyle}>
                    <Text type="white">First in stack</Text>
                  </div>
                  <div style={divStyle}>
                    <Text type="white">Second in stack</Text>
                  </div>
                </Stack>
                <div style={divStyle}>
                  <Text type="white">After stack</Text>
                </div>
              </Stack>
            </div>
          </Stack>
          <Stack>
            <Heading as="h3" type="title2">
              Don&apos;t shrink
            </Heading>
            <div style={{ width: "400px" }}>
              <Stack direction="row">
                <div style={divStyle}>
                  <Text type="white">Before stack</Text>
                </div>
                <Stack inline shrink={false} basis="420px">
                  <div style={divStyle}>
                    <Text type="white">First in stack</Text>
                  </div>
                  <div style={divStyle}>
                    <Text type="white">Second in stack</Text>
                  </div>
                </Stack>
                <div style={divStyle}>
                  <Text type="white">After stack</Text>
                </div>
              </Stack>
            </div>
          </Stack>
        </Stack>
      </Stack>
    );
  },
  info: {
    title: "Flex properties container",
    description:
      "In addition to flex properties for their children, stacks themselves can be flex items and so have various properties to control their behavior.",
  },
};
