import React from "react";
import { navigate, PageRendererProps, graphql } from "gatsby";
import { merge, keyBy, sortBy } from "lodash";
import {
  Modal,
  ModalSection,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Text,
  TextLink,
  Stack,
} from "@kiwicom/orbit-components";
import { css } from "styled-components";

import { isLoggedIn } from "../../services/auth";
import DocLayout from "../../components/DocLayout";

import { TrackingNode } from ".";

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

const AllRepositories = ({ location, pageContext, data }: Props) => {
  const [render, setRender] = React.useState(false);
  const [propInstances, setPropsInstances] = React.useState<string[]>([]);
  const [isOpenModal, setOpenModal] = React.useState(false);

  React.useEffect(() => {
    if (!isLoggedIn() && location.pathname === "/dashboard/tracking/") {
      navigate(`/dashboard/login/`);
    } else {
      setRender(true);
    }
  }, [setRender]);

  const { slug, title, trail } = pageContext;

  const combinedData = data.allTracking.nodes.reduce((acc, cur) => {
    cur.trackedData
      .filter(source => !source.icon)
      .forEach(({ name, ...componentData }) => {
        if (!acc[name]) {
          acc[name] = { name, ...componentData };
        } else {
          const prev = acc[name];

          acc[name] = {
            ...acc[name],
            instances: prev.instances + componentData.instances,
            sources: prev.sources.concat(componentData.sources),
            props: merge(keyBy(prev.props, "name"), keyBy(componentData.props, "name")),
          };
        }
      });

    return acc;
  }, {});

  const handleInstances = (instances, name) => {
    const filteredProps = instances
      .filter(({ props }) => props.includes(name))
      .map(({ url }) => url);
    setOpenModal(true);
    setPropsInstances(filteredProps);
  };

  return (
    render && (
      <DocLayout location={location} path={slug} title={title} trail={trail} noElevation>
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
                {propInstances.map(instance => (
                  <li key={instance}>
                    <TextLink asComponent="div" key={instance} title={instance} href={instance}>
                      {instance.split("/").slice(-2).join("/")}
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
              <TableCell>Component</TableCell>
              <TableCell>Instances</TableCell>
              <TableCell>Deprecated</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Properties</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(sortBy(combinedData, "name")).map(
              ({ name, instances, isDeprecated, category, props, sources }) => (
                <TableRow key={name}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{instances}</TableCell>
                  <TableCell>{isDeprecated}</TableCell>
                  <TableCell>{category}</TableCell>
                  <TableCell>
                    {sortBy(Object.values(props), ["used"])
                      .reverse()
                      /* @ts-expect-error: todo */
                      .map(({ name: propName, used }) => (
                        <Stack flex align="center" key={propName} spacing="XXSmall">
                          <TextLink onClick={() => handleInstances(sources, propName)}>
                            {propName}:
                          </TextLink>
                          <Text weight="medium">{used}</Text>
                        </Stack>
                      ))}
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </DocLayout>
    )
  );
};

export const query = graphql`
  query AllRepositoriesTracking {
    allTracking {
      nodes {
        trackedData {
          instances
          category
          icon
          isDeprecated
          name
          props {
            name
            used
          }
          sources {
            url
            props
          }
        }
      }
    }
  }
`;

export default AllRepositories;
