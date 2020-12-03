import React from "react";
import {
  Heading,
  Text,
  TextLink,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@kiwicom/orbit-components";
import { InlineCode, CodeBlock } from "./components/Code";

export const p = ({ children }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <Text>{children}</Text>
);
export const h2 = ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <Heading as="h2" type="title1">
    {children}
  </Heading>
);
export const h3 = ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <Heading as="h3" type="title2">
    {children}
  </Heading>
);
export const h4 = ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <Heading as="h4" type="title3">
    {children}
  </Heading>
);
export const h5 = ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <Heading as="h5" type="title4">
    {children}
  </Heading>
);
export const h6 = ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <Heading as="h6" type="title5">
    {children}
  </Heading>
);
export const table = ({ children }: React.TableHTMLAttributes<HTMLTableElement>) => (
  <Table>{children}</Table>
);
export const thead = ({ children }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <TableHead>{children}</TableHead>
);
export const tbody = ({ children }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <TableBody>{children}</TableBody>
);
export const tr = ({ children }: React.HTMLAttributes<HTMLTableRowElement>) => (
  <TableRow>{children}</TableRow>
);
export const td = ({
  children,
  align,
  valign,
}: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
  <TableCell
    as="td"
    align={align === "left" || align === "center" || align === "right" ? align : undefined}
    verticalAlign={valign}
  >
    {children}
  </TableCell>
);
export const th = ({ children, align }: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
  <TableCell
    as="th"
    align={align === "left" || align === "center" || align === "right" ? align : undefined}
  >
    {children}
  </TableCell>
);
export const code = CodeBlock;
export const inlineCode = InlineCode;
export const a = ({ children, href }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  if (href) return <TextLink href={href}>{children}</TextLink>;
  return <a href={href}>{children}</a>;
};
