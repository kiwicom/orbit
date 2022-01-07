import React from "react";
import { graphql, navigate } from "gatsby";
import { upperFirst } from "lodash";
import {
  Heading,
  InputField,
  Table,
  TableRow,
  TableCell,
  TableHead,
  Button,
  Truncate,
  TableBody,
  Text,
  Stack,
  TextLink,
} from "@kiwicom/orbit-components";
import Slide from "@kiwicom/orbit-components/lib/utils/Slide";

import { isLoggedIn } from "../../services/auth";
import DocLayout from "../../components/DocLayout";

import { Props as PageProps } from ".";

const ComponentPage = ({ data, location, pageContext }: PageProps) => {
  const [allSources, setAllSources] = React.useState<string[]>([]);
  const [height, setHeight] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);
  const [render, setRender] = React.useState(false);

  const { name, trail } = pageContext;
  const {
    category,
    props,
    sources,
    instances,
    isDeprecated,
  } = data.allTracking.nodes[0].trackedData.filter(
    ({ name: componentName }) => componentName === name,
  )[0];

  const sourceLinks = sources.map(({ url }) => url);

  React.useEffect(() => {
    if (!isLoggedIn()) {
      navigate(`/dashboard/login/`);
    } else {
      setRender(true);
      setAllSources(sourceLinks);
    }
  }, [sources, setAllSources, setRender, sourceLinks]);

  // support only primitives for now
  const FILTERED_NAMES = [
    "null",
    "(Identifier)",
    "(ObjectExpression)",
    "(CallExpression)",
    "(ConditionalExpression)",
    "(MemberExpression)",
    "(ArrowFunctionExpression)",
    "(LogicalExpression)",
    "(JSXElement)",
  ];

  const measureRef = React.useCallback(n => {
    if (n) {
      setHeight(n.getBoundingClientRect().height);
    }
  }, []);

  return (
    render && (
      <DocLayout
        location={location}
        title={upperFirst(name)}
        path={location.pathname}
        trail={trail}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Instances</TableCell>
              <TableCell>Deprecated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{category}</TableCell>
              <TableCell>{instances}</TableCell>
              <TableCell>{isDeprecated}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Property name</TableCell>
              <TableCell>Instances</TableCell>
              <TableCell>Properties</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.map(({ name: propName, used, values }) => (
              <TableRow key={propName}>
                <TableCell>{propName}</TableCell>
                <TableCell>{used}</TableCell>
                <TableCell>
                  {values
                    .filter(value => !FILTERED_NAMES.includes(value.name))
                    .map(({ name: valueName, used: valueInstances }) => (
                      <Text size="small" key={valueName}>
                        {valueName}: <b>{valueInstances}</b>
                      </Text>
                    ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Heading>Sources</Heading>
        <Stack direction="column">
          {sources.length > 15 && (
            <InputField
              placeholder="filter sources"
              onChange={ev => {
                if (ev.currentTarget.value.length === 0) {
                  setAllSources(sourceLinks);
                } else {
                  setAllSources(allSources.filter(el => el.includes(ev.currentTarget.value)));
                }
              }}
            />
          )}
          {allSources.length < 15 ? (
            allSources.map(source => (
              <TextLink key={source} size="small" href={source}>
                <Truncate maxWidth="887px">{source.split("master")[1]}</Truncate>
              </TextLink>
            ))
          ) : (
            <>
              <Button onClick={() => setExpanded(prev => !prev)}>Toggle all sources</Button>
              {allSources.slice(0, 15).map(source => (
                <TextLink key={source} size="small" href={source}>
                  <Truncate maxWidth="887px">{source.split("master")[1]}</Truncate>
                </TextLink>
              ))}
              <Slide maxHeight={height} expanded={expanded}>
                <div ref={measureRef}>
                  <Stack inline direction="column">
                    {allSources.slice(15, allSources.length).map(source => (
                      <TextLink key={source} size="small" href={source}>
                        <Truncate maxWidth="887px">{source.split("master")[1]}</Truncate>
                      </TextLink>
                    ))}
                  </Stack>
                </div>
              </Slide>
            </>
          )}
        </Stack>
      </DocLayout>
    )
  );
};

export const query = graphql`
  query TrackingComponentQuery($repoName: String!) {
    allTracking(
      sort: { fields: createdAt, order: DESC }
      limit: 8
      filter: { name: { eq: $repoName } }
    ) {
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
            props
          }
        }
      }
    }
  }
`;

export default ComponentPage;
