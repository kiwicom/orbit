import React from "react";
import { PageRendererProps, graphql, useStaticQuery } from "gatsby";
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

import DocLayout from "../DocLayout";
import { SchemeTrackingNode } from "./interfaces";
import getDataDiff from "./compare";

const DataDiffTemplate = ({ location }: PageRendererProps) => {
  const { allTracking }: SchemeTrackingNode = useStaticQuery(graphql`
    query DifferenceTracking {
      allTracking {
        nodes {
          trackedData {
            instances
            name
            props {
              used
              name
            }
          }
        }
      }
    }
  `);

  const { nodes } = allTracking;
  const first = nodes.slice(0, 8);
  const last = nodes.slice(-8);
  const difference = getDataDiff(first, last);

  if (!difference) return <Text>No difference was created</Text>;

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
          {Object.keys(difference.diff).map(name => {
            const { before, after } = difference.diff[name].instances;
            const { props } = difference.diff[name];
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
