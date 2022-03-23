import React from "react";
import { Link } from "gatsby";
import { sortBy } from "lodash";
import {
  Heading,
  Stack,
  Table,
  TextLink,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@kiwicom/orbit-components";
import { ChevronDown, ChevronUp } from "@kiwicom/orbit-components/icons";

const ComponentList = ({ components }) => {
  const [data, setData] = React.useState([]);
  const [isSorted, setSorted] = React.useState(false);

  React.useEffect(() => {
    setData(components);
  }, [setData, components]);

  const Sort = ({ children, onClick }) => (
    <TextLink
      type="secondary"
      iconRight={isSorted ? <ChevronUp /> : <ChevronDown />}
      onClick={onClick}
    >
      {children}
    </TextLink>
  );

  return (
    <Stack flex direction="column">
      <Heading type="title3">Orbit components usage</Heading>
      <Table compact>
        <TableHead>
          <TableRow>
            <TableCell>
              <Sort
                onClick={() => {
                  if (isSorted) {
                    setData(prev => sortBy(prev, "name").reverse());
                    setSorted(false);
                  } else {
                    setSorted(true);
                    setData(prev => sortBy(prev, "name"));
                  }
                }}
              >
                Component
              </Sort>
            </TableCell>
            <TableCell>
              <Sort
                onClick={() => {
                  if (isSorted) {
                    setData(prev => sortBy(prev, "instances").reverse());
                    setSorted(false);
                  } else {
                    setSorted(true);
                    setData(prev => sortBy(prev, "instances"));
                  }
                }}
              >
                Number of instances
              </Sort>
            </TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Deprecated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ slug, name, instances, isDeprecated, category }) => (
            <TableRow key={name}>
              <TableCell>
                <Link to={slug} aria-label={name}>
                  <TextLink asComponent="p">{name}</TextLink>
                </Link>
              </TableCell>
              <TableCell>{instances}</TableCell>
              <TableCell>{category}</TableCell>
              <TableCell>
                {isDeprecated && (
                  <span role="img" aria-hidden="true">
                    {"\u{2705}"}
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default ComponentList;
