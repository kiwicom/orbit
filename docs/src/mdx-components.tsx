import React from "react";
import {
  Alert,
  Heading,
  Separator,
  Text,
  TextLink,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@kiwicom/orbit-components";
import { NewWindow } from "@kiwicom/orbit-components/icons";
import { navigate } from "gatsby";
import { css } from "styled-components";

import { InlineCode, CodeBlock } from "./components/Code";
import useIsUrlExternal from "./hooks/useIsUrlExternal";

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
export const hr = () => <Separator spaceAfter="largest" />;
export const ol = ({ children }: React.OlHTMLAttributes<HTMLOListElement>) => (
  <ol
    css={css`
      list-style: outside none decimal;
      margin-left: ${({ theme }) => theme.orbit.spaceMedium};
      ol,
      ul {
        margin: ${({ theme }) => theme.orbit.spaceSmall};
      }
    `}
  >
    {children}
  </ol>
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
export const ul = ({ children }: React.HTMLAttributes<HTMLUListElement>) => (
  <ul
    css={css`
      list-style: outside none disc;
      margin-left: ${({ theme }) => theme.orbit.spaceMedium};
      ol,
      ul {
        margin: ${({ theme }) => theme.orbit.spaceSmall};
      }
    `}
  >
    {children}
  </ul>
);
export const figcaption = ({ children }: React.HTMLAttributes<HTMLElement>) => (
  <figcaption>
    <Text align="center" italic>
      {children}
    </Text>
  </figcaption>
);
export const code = CodeBlock;
export const dd = ({ children }: React.HTMLAttributes<HTMLElement>) => (
  <dd
    css={css`
      margin-left: 2em;
    `}
  >
    <Text>{children}</Text>
  </dd>
);
export const dt = ({ children }: React.HTMLAttributes<HTMLElement>) => (
  <dt>
    <Heading as="h3" type="title2">
      {children}
    </Heading>
  </dt>
);
export const inlineCode = InlineCode;
export const a = function Anchor({
  children,
  href,
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = useIsUrlExternal(href);
  return (
    <span
      css={css`
        /* TextLink's line-height affects nested elements like <code> */
        a {
          line-height: normal;
        }
      `}
    >
      <TextLink
        href={href}
        external={isExternal}
        iconRight={isExternal && <NewWindow />}
        onClick={event => {
          if (isExternal || !href) return;
          event.preventDefault();
          navigate(href);
        }}
      >
        {children}
      </TextLink>
    </span>
  );
};
export const Callout = ({ icon = true, ...props }) => (
  <Alert icon={icon} spaceAfter="large" {...props} />
);
