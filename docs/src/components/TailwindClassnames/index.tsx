import React from "react";
import { orbitComponentsPreset } from "@kiwicom/orbit-tailwind-preset";
import type { Config } from "tailwindcss";
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
import { upperFirst } from "lodash";

const StyledTableWrapper = styled.div`
  table {
    table-layout: fixed;
  }
`;

const tailwindPrefixes = {
  BackgroundColor: "bg",
  BorderColor: "border",
  TextColor: "text",
  Padding: "p",
  Width: "w",
  Height: "h",
  LineHeight: "leading",
  FontSize: "text",
  FontWeight: "font",
  Animation: "animate",
};

const getClassnames = (config: Config) => {
  const classnames = {};

  if (config && config?.theme?.extend) {
    Object.keys(config.theme.extend).forEach(group => {
      if (config?.theme?.extend) {
        if (group !== "keyframes") {
          classnames[upperFirst(group)] = {
            ...config.theme.extend[group],
          };
        }
      }
    });
  }

  return classnames;
};

const TailwindClassnames = () => {
  const groups = getClassnames(orbitComponentsPreset());

  const [listOfClassnames, setListOfClassnames] = React.useState(() =>
    getClassnames(orbitComponentsPreset()),
  );

  const [selectedGroup, setSelectedGroup] = React.useState<string>();

  return (
    <Stack direction="column" spacing="XLarge">
      <Stack flex spacing="small">
        {Object.keys(groups).map(grp => {
          return (
            <Button
              type={selectedGroup === grp ? "primary" : "secondary"}
              size="small"
              onClick={() => {
                setSelectedGroup(grp);
                setListOfClassnames(() => {
                  return {
                    [grp]: {
                      ...groups[grp],
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
                      <TableCell>{`${tailwindPrefixes[group]}-${name}`}</TableCell>
                      <TableCell>{String(value)}</TableCell>
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
