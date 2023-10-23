import React from "react";
import { PageRendererProps, graphql, useStaticQuery } from "gatsby";
import _ from "lodash";
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Text,
  Stack,
} from "@kiwicom/orbit-components";
import { ChevronForward } from "@kiwicom/orbit-components/icons";

import DocLayout from "../DocLayout";
import { SchemeTrackingNode, TrackingNode, TrackingProp } from "./interfaces";
import getDataDiff from "./compare";

const collectProps = (props: TrackingProp[]) =>
  props.reduce((acc, cur) => {
    const { name, used } = cur;
    if (!acc[name]) acc[name] = { ...cur };
    else
      acc[name] = {
        name,
        used: Number(acc[name].used) + Number(used),
      };

    return acc;
  }, {});

const DataDiffTemplate = ({ location }: PageRendererProps) => {
  const { allTracking }: SchemeTrackingNode = useStaticQuery(graphql`
    query DifferenceTracking {
      allTracking {
        nodes {
          trackedData {
            instances
            icon
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
  const TRACKED_REPOSITORIES_COUNT = 11;
  const first = nodes.slice(0, TRACKED_REPOSITORIES_COUNT);
  const last = nodes.slice(-TRACKED_REPOSITORIES_COUNT);

  const getSum = (data: TrackingNode[]) =>
    data.reduce((acc, cur) => {
      cur.trackedData
        .filter(source => !source.icon)
        .forEach(({ name, instances, props }) => {
          if (!acc[name]) {
            acc[name] = {
              name,
              instances,
              props: props.map(obj => _.omit(obj, ["values"])),
            };
          } else {
            const prev = acc[name];
            acc[name] = {
              ...acc[name],
              instances: prev.instances + instances,
              props: Object.values(
                collectProps(
                  [...acc[name].props, ...props].map((obj: TrackingProp) =>
                    _.omit(obj, ["values"]),
                  ),
                ),
              ),
            };
          }
        });

      return acc;
    }, {});

  const firstSum = getSum(first);
  const lastSum = getSum(last);

  const difference = getDataDiff(firstSum, lastSum);

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
                    <ChevronForward size="small" />
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
                            <ChevronForward size="small" />
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
