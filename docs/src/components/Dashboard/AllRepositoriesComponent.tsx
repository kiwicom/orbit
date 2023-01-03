import React from "react";
import { PageRendererProps, graphql, useStaticQuery } from "gatsby";
import { sortBy, upperFirst } from "lodash";
import fp from "lodash/fp";
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Stack,
  TextLink,
  Modal,
  ModalSection,
} from "@kiwicom/orbit-components";
import { css } from "styled-components";
import { ChevronDown, ChevronUp } from "@kiwicom/orbit-components/icons";

import DocLayout from "../DocLayout";
import { sumProperties } from "./helpers";
import { TrackedData, TrackingProp, SchemeTrackingNode } from "./interfaces";

const Sort = ({ children, onClick, isSorted }) => (
  <TextLink
    type="secondary"
    iconRight={isSorted ? <ChevronUp /> : <ChevronDown />}
    onClick={onClick}
  >
    {children}
  </TextLink>
);

const AllRepositoriesComponent = ({ location }: PageRendererProps) => {
  const [isOpenModal, setOpenModal] = React.useState(false);
  const [propsInstances, setPropsInstances] = React.useState<string[]>([]);
  const [isSortedByName, setSortedByName] = React.useState(false);
  const [isSortedByInstances, setSortedByInstances] = React.useState(false);
  const [allData, setAllData] = React.useState<TrackingProp[] | null>(null);
  const { pathname } = location;
  const title = pathname.split("/").filter(Boolean).slice(-1)[0];

  const { allTracking }: SchemeTrackingNode = useStaticQuery(graphql`
    query AllTrackingComponentQuery {
      allTracking(sort: { createdAt: DESC }, limit: 8) {
        nodes {
          createdAt
          name
          trackedData {
            icon
            instances
            category
            isDeprecated
            name
            props {
              name
              used
              values {
                name
                used
              }
            }
            sources {
              url
              props {
                name
                value
              }
            }
          }
        }
      }
    }
  `);

  const component = fp.compose(
    fp.map((n: TrackedData[]) => n.find(c => c.name.toLowerCase() === title)),
    fp.map(fp.get(["trackedData"])),
  )(allTracking.nodes);

  const props = fp.compose(
    sumProperties,
    fp.filter(Boolean),
    fp.flatten,
    fp.map(fp.get("props")),
  )(component);

  const sources = fp.compose(fp.filter(Boolean), fp.flatten, fp.map(fp.get("sources")))(component);

  React.useEffect(() => {
    setAllData(Object.values<TrackingProp>(props));
  }, []);

  const handleInstances = (instances, propName, valueName) => {
    const filteredProps = instances
      .filter(({ props: instanceProps }) =>
        instanceProps.some(prop => prop.name === propName && prop.value === valueName),
      )
      .map(({ url }) => url);

    setOpenModal(true);
    setPropsInstances(filteredProps);
  };

  if (!allData) return null;

  return (
    <DocLayout location={location} path={location.pathname} title={upperFirst(title)}>
      {isOpenModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <ModalSection>
            <ol
              css={css`
                list-style-type: decimal;
                & > * {
                  margin-bottom: 0.5rem;
                }
              `}
            >
              {propsInstances.map(instance => (
                <li key={instance}>
                  <TextLink key={instance} title={instance} href={instance}>
                    {instance.split("/").slice(-4).join("/")}
                  </TextLink>
                </li>
              ))}
            </ol>
          </ModalSection>
        </Modal>
      )}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Sort
                isSorted={isSortedByName}
                onClick={() => {
                  if (isSortedByName) {
                    setAllData(prev => sortBy(prev, ["name"]).reverse());
                    setSortedByName(false);
                  } else {
                    setSortedByName(true);
                    setAllData(prev => sortBy(prev, ["name"]));
                  }
                }}
              >
                Property name
              </Sort>
            </TableCell>
            <TableCell>
              <Sort
                isSorted={isSortedByInstances}
                onClick={() => {
                  if (isSortedByInstances) {
                    setAllData(prev => sortBy(prev, ["used"]).reverse());
                    setSortedByInstances(false);
                  } else {
                    setSortedByInstances(true);
                    setAllData(prev => sortBy(prev, ["used"]));
                  }
                }}
              >
                Instances
              </Sort>
            </TableCell>
            <TableCell>Properties</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allData.map(({ name: propName, used, values }, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableRow key={idx}>
              <TableCell>{propName}</TableCell>
              <TableCell>{used}</TableCell>
              <TableCell>
                <Stack direction="column" spacing="XXSmall">
                  {sortBy(values, ["used"])
                    .reverse()
                    .map(({ name: valueName, used: valueInstances }, id) => (
                      <TextLink
                        // eslint-disable-next-line react/no-array-index-key
                        key={id}
                        size="small"
                        onClick={() => handleInstances(sources, propName, valueName)}
                      >
                        {valueName}: <b>{valueInstances}</b>
                      </TextLink>
                    ))}
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DocLayout>
  );
};

export default AllRepositoriesComponent;
