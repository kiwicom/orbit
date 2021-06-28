import * as React from "react";
import { Stack, Heading, Text } from "@kiwicom/orbit-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => {
    const divStyle: React.CSSProperties = {
      width: "160px",
      height: "40px",
      backgroundColor: `${defaultTheme.orbit.paletteInkLight}`,
    };

    const divStyleNarrow = {
      ...divStyle,
      width: "80px",
    };

    const divStyleTall = {
      ...divStyle,
      height: "80px",
    };

    const divStyleAutoHeight = {
      ...divStyle,
      height: "auto",
    };

    const divStyleAutoWidth = {
      ...divStyle,
      width: "auto",
    };

    return (
      <Stack>
        <Stack>
          <Heading as="h2" type="title1">
            Align/justify
          </Heading>
          <Text>
            Align and justify set how the children appear within a stack. Justify is always relative
            to the stack&apos;s main direction; while align is about the other direction. So they
            work differently for horizontal and vertical stacks.
          </Text>
          <Stack>
            <Heading as="h3" type="title2">
              Horizontal stacks
            </Heading>
            <Stack>
              <Heading as="h4" type="title3">
                Justify
              </Heading>
              <Stack>
                <Heading as="h5" type="title4">
                  Start (the default)
                </Heading>
                <Text>Items are grouped at the start of the row.</Text>
                <Stack justify="start">
                  <div style={divStyle} />
                  <div style={divStyleNarrow} />
                  <div style={divStyle} />
                </Stack>
              </Stack>
              <Stack>
                <Heading as="h5" type="title4">
                  End
                </Heading>
                <Text>Items are grouped toward the end of the row.</Text>
                <Stack justify="end">
                  <div style={divStyle} />
                  <div style={divStyleNarrow} />
                  <div style={divStyle} />
                </Stack>
              </Stack>
              <Stack>
                <Heading as="h5" type="title4">
                  Center
                </Heading>
                <Text>Items are horizontally centered.</Text>
                <Stack justify="center">
                  <div style={divStyle} />
                  <div style={divStyleNarrow} />
                  <div style={divStyle} />
                </Stack>
              </Stack>
              <Stack>
                <Heading as="h5" type="title4">
                  Between
                </Heading>
                <Text>
                  Items are spaced evenly throughout the stack, with the first at the start and the
                  last at the end.
                </Text>
                <Stack justify="between">
                  <div style={divStyle} />
                  <div style={divStyleNarrow} />
                  <div style={divStyle} />
                </Stack>
              </Stack>
              <Stack>
                <Heading as="h5" type="title4">
                  Around
                </Heading>
                <Text>
                  Items are placed so they all have equal spacing on both sides. The first item has
                  one space on its left and then two to its right (one from it and one from the next
                  item). And similarly for the last item.
                </Text>
                <Stack justify="around">
                  <div style={divStyle} />
                  <div style={divStyleNarrow} />
                  <div style={divStyle} />
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              <Heading as="h4" type="title3">
                Align
              </Heading>
              <Stack>
                <Heading as="h5" type="title4">
                  Start (the default)
                </Heading>
                <Text>Items align with the top of the stack.</Text>
                <Stack align="start">
                  <div style={divStyle} />
                  <div style={divStyleTall} />
                  <div style={divStyle} />
                </Stack>
              </Stack>
              <Stack>
                <Heading as="h5" type="title4">
                  End
                </Heading>
                <Text>Items align with the bottom of the stack.</Text>
                <Stack align="end">
                  <div style={divStyle} />
                  <div style={divStyleTall} />
                  <div style={divStyle} />
                </Stack>
              </Stack>
              <Stack>
                <Heading as="h5" type="title4">
                  Center
                </Heading>
                <Text>Items are vertically centered.</Text>
                <Stack align="center">
                  <div style={divStyle} />
                  <div style={divStyleTall} />
                  <div style={divStyle} />
                </Stack>
              </Stack>
              <Stack>
                <Heading as="h5" type="title4">
                  Stretch
                </Heading>
                <Text>
                  Items without explicit heights (or with height as <code>auto</code>) are stretched
                  to fill the vertical space.
                </Text>
                <Stack align="stretch">
                  <div style={divStyleAutoHeight} />
                  <div style={divStyleTall} />
                  <div style={divStyleAutoHeight} />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Heading as="h3" type="title2">
              Vertical stacks
            </Heading>
            <Stack>
              <Heading as="h4" type="title3">
                Justify
              </Heading>
              <Text>
                Stacks generally take up the height of their contents. So justify most often has no
                effect.
              </Text>
            </Stack>
            <Stack>
              <Heading as="h4" type="title3">
                Align
              </Heading>
              <Stack>
                <Heading as="h5" type="title4">
                  Start (the default)
                </Heading>
                <Text>Items align with the start of the stack.</Text>
                <Stack direction="column" align="start">
                  <div style={divStyle} />
                  <div style={divStyleNarrow} />
                  <div style={divStyle} />
                </Stack>
              </Stack>
              <Stack>
                <Heading as="h5" type="title4">
                  End
                </Heading>
                <Text>Items align with the end of the stack.</Text>
                <Stack direction="column" align="end">
                  <div style={divStyle} />
                  <div style={divStyleNarrow} />
                  <div style={divStyle} />
                </Stack>
              </Stack>
              <Stack>
                <Heading as="h5" type="title4">
                  Center
                </Heading>
                <Text>Items are horizontally centered.</Text>
                <Stack direction="column" align="center">
                  <div style={divStyle} />
                  <div style={divStyleNarrow} />
                  <div style={divStyle} />
                </Stack>
              </Stack>
              <Stack>
                <Heading as="h5" type="title4">
                  Stretch
                </Heading>
                <Text>
                  Items without explicit widths (or with width as <code>auto</code>) are stretched
                  to fill the horizontally space.
                </Text>
                <Stack direction="column" align="stretch">
                  <div style={divStyleAutoWidth} />
                  <div style={divStyle} />
                  <div style={divStyleAutoWidth} />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Heading as="h2" type="title1">
            Wrap
          </Heading>
          <Text>
            Set whether or not the stack&apos;s children should wrap to a new line (for horizontal
            stacks) or column (for vertical stacks) when the stack cannot contain them at their
            default size. Defaults to <code>false</code>, meaning the items are forced into a single
            line/column and may overflow the stack or shrink.
          </Text>
          <Stack>
            <Heading as="h3" type="title2">
              Not wrapped
            </Heading>
            <div style={{ width: "400px" }}>
              <Stack flex>
                <div style={divStyle} />
                <div style={divStyle} />
                <div style={divStyle} />
              </Stack>
            </div>
          </Stack>
          <Stack>
            <Heading as="h3" type="title2">
              Wrapped
            </Heading>
            <div style={{ width: "400px" }}>
              <Stack wrap>
                <div style={divStyle} />
                <div style={divStyle} />
                <div style={divStyle} />
              </Stack>
            </div>
          </Stack>
        </Stack>
      </Stack>
    );
  },
  info: {
    title: "Flex properties children",
    description:
      "Stacks offer many options for flexing their children. Adding any flex property to a stack changes its default direction to horizontal (row).",
  },
};
