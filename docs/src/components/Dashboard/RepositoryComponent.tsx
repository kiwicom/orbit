import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { upperFirst } from "lodash";
import fp from "lodash/fp";
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

import { SchemeTrackingNode } from "./interfaces";
import DocLayout from "../DocLayout";

const ComponentPage = ({ location }) => {
  const [allSources, setAllSources] = React.useState<string[]>([]);
  const [height, setHeight] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  const { allTracking }: SchemeTrackingNode = useStaticQuery(graphql`
    query TrackingComponentQuery {
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

  const { pathname } = location;
  const [repo, title] = pathname.split("/").filter(Boolean).slice(-2);

  const { category, props, sources, instances, isDeprecated } = fp.compose(
    fp.head,
    fp.filter(({ name: componentName }) => componentName.toLowerCase() === title),
    fp.get("trackedData"),
    fp.head,
    fp.filter(({ name }) => name.toLowerCase() === repo),
  )(allTracking.nodes);

  const sourceLinks = sources && sources.map(({ url }) => url);

  React.useEffect(() => {
    setAllSources(sourceLinks);
  }, []);

  const measureRef = React.useCallback(n => {
    if (n) {
      setHeight(n.getBoundingClientRect().height);
    }
  }, []);

  return (
    <DocLayout location={location} title={upperFirst(title)} path={location.pathname}>
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
                {values.map(({ name: valueName, used: valueInstances }) => (
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
  );
};

export default ComponentPage;
