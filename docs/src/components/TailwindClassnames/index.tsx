import React from "react";
import orbitFoundation from "@kiwicom/orbit-tailwind-preset";
import {
  Table,
  Text,
  TableHead,
  Stack,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Heading,
} from "@kiwicom/orbit-components";
import styled from "styled-components";
import { upperFirst, transform, omit } from "lodash";

import { DesignTokenName, DesignTokenValue, DesignTokenIcon } from "../DesignTokensList";

type Category =
  | "Screens"
  | "Spacing"
  | "ZIndex"
  | "Colors"
  | "BorderRadius"
  | "BoxShadow"
  | "TransitionDuration"
  | "Padding"
  | "Width"
  | "Height"
  | "LineHeight"
  | "FontSize"
  | "FontWeight"
  | "FontFamily"
  | "Animation";

/* eslint-disable no-param-reassign */

const StyledTableWrapper = styled.div`
  table {
    table-layout: fixed;
  }
`;

const tailwindPrefixes = {
  BorderRadius: "rounded",
  BoxShadow: "shadow",
  TransitionDuration: "duration",
  Padding: "p",
  Width: "w",
  Height: "h",
  LineHeight: "leading",
  FontSize: "text",
  FontWeight: "font",
  FontFamily: "font",
  ZIndex: "z",
  Animation: "animate",
};

const getCategory = (name: Category) => {
  if (["Padding", "Width", "Height"].includes(name)) return "size";
  if (["FontWeight", "FontSize", "LineHeight", "FontFamily"].includes(name)) return "typography";
  if (name === "ZIndex") return "z-index";
  if (name === "BorderRadius") return "border-radius";
  if (name === "BoxShadow") return "elevation";
  if (name === "Spacing") return "spacing";
  if (name === "Screens") return "breakpoint";
  if (name === "TransitionDuration") return "duration";

  return "palette";
};

const transformColors = (colors: Record<string, string>) => {
  return Object.entries(colors).reduce((acc, [category, value]) => {
    if (typeof value === "object") {
      Object.entries(value).forEach(([name, color]) => {
        acc[`${category}-${name}`] = color;
      });
    } else {
      acc[category] = value;
    }

    return acc;
  }, {});
};

const CategoryDescriptions = ({ category }: { category: Category }) => {
  return (
    <Text type="info" weight="medium" margin={{ bottom: "12px" }}>
      {category === "Colors" &&
        `To be used with Tailwind classes that apply a color property (eg: "text-blue-dark",
        "bg-red-light", etc).`}
      {category === "Screens" &&
        `To be used as a Tailwind prefix for defining media queries (eg: "sm:opacity-1",
        "tb:hidden", etc).`}
      {category === "Spacing" &&
        `To be used as a Tailwind prefix for defining margin and padding (eg: "m-300", "p-800", etc).`}
      {category === "ZIndex" && "Default Tailwind zIndex classes are also available"}
    </Text>
  );
};

const TailwindClassnames = () => {
  const orbitPreset = orbitFoundation().presets?.at(0)?.theme;
  const transformedConfig = omit(
    transform(
      {
        ...orbitPreset,
        zIndex: orbitPreset?.extend?.zIndex,
      },
      (r, v, k) => {
        if (k === "colors") {
          // @ts-expect-error lodash
          r[upperFirst(k)] = transformColors(v);
        } else {
          r[upperFirst(k)] = v;
        }
        return r;
      },
      {},
    ),
    ["Keyframes", "Extend"],
  );

  const [listOfClassnames, setListOfClassnames] = React.useState(transformedConfig);

  const [selectedCategory, setSelectedCategory] = React.useState<string>();

  return (
    <Stack direction="column" shrink spacing="800">
      <Stack inline spacing="300" wrap>
        {Object.keys(transformedConfig).map(cat => {
          return (
            <Button
              type={selectedCategory === cat ? "primary" : "secondary"}
              size="small"
              onClick={() => {
                setSelectedCategory(cat);
                setListOfClassnames(() => {
                  return {
                    [cat]: {
                      ...transformedConfig[cat],
                    },
                  };
                });
              }}
            >
              {cat}
            </Button>
          );
        })}
      </Stack>
      {Object.keys(listOfClassnames).map(category => {
        return (
          <StyledTableWrapper>
            <Heading type="title2" spaceAfter="small">
              {category}
            </Heading>
            <CategoryDescriptions category={category as Category} />
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Classname</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(listOfClassnames[category]).map(([name, value]) => {
                  return (
                    <TableRow>
                      <TableCell>
                        <Stack flex align="center">
                          <DesignTokenIcon
                            value={String(value)}
                            type={getCategory(category as Category)}
                          />
                          <DesignTokenName tooltipText="Click to copy the classname.">
                            {["Screens", "Spacing", "Colors"].includes(category)
                              ? name
                              : `${tailwindPrefixes[category]}-${name}`}
                          </DesignTokenName>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <DesignTokenValue value={String(value)} showCopyButton />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </StyledTableWrapper>
        );
      })}
    </Stack>
  );
};

export default TailwindClassnames;
