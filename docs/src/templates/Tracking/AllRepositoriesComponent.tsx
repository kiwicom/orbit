import React from "react";
import { navigate, PageRendererProps, graphql } from "gatsby";
import { sortBy } from "lodash";
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

import DocLayout from "../../components/DocLayout";
import { isLoggedIn } from "../../services/auth";
import { sumProperties } from "./helpers";

import { TrackingNode, TrackedData, TrackingProp } from ".";

interface Props extends PageRendererProps {
  pageContext: {
    slug: string;
    title: string;
    trail: Array<{
      name: string;
      url: string;
    }>;
  };
  data: {
    allTracking: {
      nodes: TrackingNode[];
    };
  };
}

const Sort = ({ children, onClick, isSorted }) => (
  <TextLink
    type="secondary"
    iconRight={isSorted ? <ChevronUp /> : <ChevronDown />}
    onClick={onClick}
  >
    {children}
  </TextLink>
);

const AllRepositoriesComponent = ({ location, data, pageContext }: Props) => {
  const { title, trail } = pageContext;
  const [render, setRender] = React.useState(false);
  const [isOpenModal, setOpenModal] = React.useState(false);
  const [propsInstances, setPropsInstances] = React.useState<string[]>([]);
  const [isSortedByName, setSortedByName] = React.useState(false);
  const [isSortedByInstances, setSortedByInstances] = React.useState(false);
  const [allData, setAllData] = React.useState<TrackingProp[] | null>(null);

  const component = fp.compose(
    fp.map((n: TrackedData[]) => n.find(c => c.name === title)),
    fp.map(fp.get(["trackedData"])),
  )(data.allTracking.nodes);

  const props = fp.compose(
    sumProperties,
    fp.filter(Boolean),
    fp.flatten,
    fp.map(fp.get("props")),
  )(component);

  const sources = fp.compose(fp.filter(Boolean), fp.flatten, fp.map(fp.get("sources")))(component);

  React.useEffect(() => {
    if (!isLoggedIn() && location.pathname === "/dashboard/tracking/") {
      navigate(`/dashboard/login/`);
    } else {
      setAllData(Object.values<TrackingProp>(props));
      setRender(true);
    }
  }, [setRender, setAllData]);

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
    render && (
      <DocLayout title={title} trail={trail} location={location} path={location.pathname}>
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
    )
  );
};

export const query = graphql`
  query AllTrackingComponentQuery {
    allTracking(sort: { fields: createdAt, order: DESC }, limit: 8) {
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
`;

export default AllRepositoriesComponent;
