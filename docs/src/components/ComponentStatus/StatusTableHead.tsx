import React from "react";
import { TableCell, TableHead, TableRow } from "@kiwicom/orbit-components";
import { css } from "styled-components";

import AndroidImage from "../../images/statuses/android.png";
import DocsImage from "../../images/statuses/docs.png";
import FigmaImage from "../../images/statuses/figma.png";
import IosImage from "../../images/statuses/ios.png";
import ReactImage from "../../images/statuses/react.png";

import { Groups } from ".";

const StatusImage = ({ image, name }) => (
  <img
    src={image}
    alt={name}
    css={css`
      margin: 0 auto;
      width: 20px;
    `}
  />
);

interface StatusTableHeadProps {
  group?: Groups;
}

const StatusTableHead = ({ group }: StatusTableHeadProps) => (
  <TableHead>
    <TableRow>
      {group && <TableCell as="th">Component</TableCell>}
      <TableCell as="th" align="center">
        <StatusImage image={FigmaImage} name="Figma" />
      </TableCell>
      <TableCell as="th" align="center">
        <StatusImage image={ReactImage} name="React" />
      </TableCell>
      <TableCell as="th" align="center">
        <StatusImage image={IosImage} name="iOS" />
      </TableCell>
      <TableCell as="th" align="center">
        <StatusImage image={AndroidImage} name="Android" />
      </TableCell>
      <TableCell as="th" align="center">
        <StatusImage image={DocsImage} name="Documentation" />
      </TableCell>
    </TableRow>
  </TableHead>
);
export default StatusTableHead;
