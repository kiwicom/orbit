import React from "react";
import { PageRendererProps } from "gatsby";
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Text,
  Stack,
} from "@kiwicom/orbit-components";
import { ChevronRight } from "@kiwicom/orbit-components/icons";

import { DiffOutputItem } from "../../plugins/dashboard/compare";
import DocLayout from "../components/DocLayout";

interface Props extends PageRendererProps {
  pageContext: {
    diff: Record<string, DiffOutputItem>;
    annotated: string;
  };
}

const DataDiffTemplate = ({ location, pageContext }: Props) => {
  const { diff } = pageContext;
  const { diff: mappedData } = diff;

  return (
    <DocLayout
      location={location}
      title="Tracking difference page"
      description="Shows difference between the first and last tracked data"
      path={location.pathname}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>instances</TableCell>
            <TableCell>props</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(mappedData).map(([name, { instances, props }]) => {
            const { before, after } = instances;
            const getStatus = (bef: number, aft: number) => (bef > aft ? "critical" : "success");

            return (
              <TableRow key={name}>
                <TableCell>{name}</TableCell>
                <TableCell>
                  <Stack inline align="center" spacing="small">
                    <Text type={getStatus(before, after)}>{before}</Text>
                    <ChevronRight size="small" />
                    <Text type={getStatus(before, after)}>{after}</Text>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="column" spacing="small">
                    {props &&
                      // @ts-expect-error TODO
                      Object.entries(props).map(([propName, { instances: propInstances }]) => (
                        <Stack key={propName} direction="column" spacing="none">
                          <Text size="small" weight="bold">
                            {propName}
                          </Text>
                          <Stack inline align="center">
                            <Text
                              size="small"
                              type={getStatus(propInstances.before, propInstances.after)}
                            >
                              {propInstances.before}
                            </Text>
                            <ChevronRight size="small" />
                            <Text
                              size="small"
                              type={getStatus(propInstances.before, propInstances.after)}
                            >
                              {propInstances.after}
                            </Text>
                          </Stack>
                        </Stack>
                      ))}
                  </Stack>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </DocLayout>
  );
};

export default DataDiffTemplate;
