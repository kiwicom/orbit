import React from "react";
import orbitFoundation, { orbitComponentsPreset } from "@kiwicom/orbit-tailwind-preset";
import {
  Table,
  TableHead,
  Stack,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Heading,
} from "@kiwicom/orbit-components";
import styled from "styled-components";
import { merge, upperFirst, transform, omit } from "lodash";

import DesignTokenName from "../DesignTokensList/components/DesignTokenName";
import DesignTokenValue from "../DesignTokensList/components/DesignTokenValue";
import DesignTokenIcon from "../DesignTokensList/components/DesignTokenIcon";

const StyledTableWrapper = styled.div`
  table {
    table-layout: fixed;
  }
`;

const tailwindPrefixes = {
  BackgroundColor: "bg",
  BorderColor: "border",
  BorderRadius: "rounded",
  BoxShadow: "shadow",
  TransitionDuration: "duration",
  TextColor: "text",
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

const getCategory = (name: string) => {
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

const TailwindClassnames = () => {
  const mergedConfigs = omit(
    transform(
      merge(orbitComponentsPreset()?.theme?.extend, {
        ...orbitFoundation.theme,
        zIndex: orbitFoundation.theme?.extend?.zIndex,
      }),
      (r, v, k) => {
        // eslint-disable-next-line no-param-reassign
        r[upperFirst(k)] = v;
        return r;
      },
      {},
    ),
    ["Keyframes", "Colors", "Extend"],
  );

  const [listOfClassnames, setListOfClassnames] = React.useState(mergedConfigs);

  const [selectedGroup, setSelectedGroup] = React.useState<string>();

  return (
    <Stack direction="column" shrink spacing="XLarge">
      <Stack inline spacing="small" wrap>
        {Object.keys(mergedConfigs).map(grp => {
          return (
            <Button
              type={selectedGroup === grp ? "primary" : "secondary"}
              size="small"
              onClick={() => {
                setSelectedGroup(grp);
                setListOfClassnames(() => {
                  return {
                    [grp]: {
                      ...mergedConfigs[grp],
                    },
                  };
                });
              }}
            >
              {grp}
            </Button>
          );
        })}
      </Stack>
      {Object.keys(listOfClassnames).map(group => {
        return (
          <StyledTableWrapper>
            <Heading type="title2" spaceAfter="normal">
              {group}
            </Heading>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Classname</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(listOfClassnames[group]).map(([name, value]) => {
                  return (
                    <TableRow>
                      <TableCell>
                        <Stack flex align="center">
                          <DesignTokenIcon value={String(value)} type={getCategory(group)} />
                          <DesignTokenName>
                            {["Screens", "Spacing"].includes(group)
                              ? name
                              : `${tailwindPrefixes[group]}-${name}`}
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
