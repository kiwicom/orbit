import React from "react";
import { Link } from "gatsby";
import { TableCell, TableRow } from "@kiwicom/orbit-components";
import useTheme from "@kiwicom/orbit-components/lib/hooks/useTheme";
import { css } from "styled-components";

import ComponentStatusBadge from "./ComponentStatusBadge";

import { Groups, Statuses } from ".";

interface ComponentStatusesProps {
  component: string;
  figma: Statuses;
  react: Statuses;
  ios: Statuses;
  android: Statuses;
  docs: Statuses;
}

interface StatusTableRowProps {
  component: ComponentStatusesProps;
  group?: Groups;
}

const StatusTableRow = ({ component, group }: StatusTableRowProps) => {
  const theme = useTheme();
  return (
    <TableRow>
      {group && (
        <TableCell>
          <Link
            to={`/components/${group.toLowerCase()}/${component.component.toLowerCase()}/`}
            css={css`
              color: ${theme.orbit.colorTextLinkPrimary};
              text-decoration: underline;
              &:hover {
                color: ${theme.orbit.colorTextLinkPrimaryHover};
                text-decoration: none;
              }
            `}
          >
            {component.component}
          </Link>
        </TableCell>
      )}
      <TableCell align="center">
        <ComponentStatusBadge status={component.figma} />
      </TableCell>
      <TableCell align="center">
        <ComponentStatusBadge status={component.react} />
      </TableCell>
      <TableCell align="center">
        <ComponentStatusBadge status={component.ios} />
      </TableCell>
      <TableCell align="center">
        <ComponentStatusBadge status={component.android} />
      </TableCell>
      <TableCell align="center">
        <ComponentStatusBadge status={component.docs} />
      </TableCell>
    </TableRow>
  );
};
export default StatusTableRow;
