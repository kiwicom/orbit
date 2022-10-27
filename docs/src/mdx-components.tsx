import React from "react";
import {
  Alert,
  Heading,
  Separator,
  Text,
  TextLink,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@kiwicom/orbit-components";
import { NewWindow } from "@kiwicom/orbit-components/icons";
import type { SpaceAfter } from "@kiwicom/orbit-components/lib/common/common";
import type { Type } from "@kiwicom/orbit-components/lib/Heading";
import { Link } from "gatsby";
import { css } from "styled-components";

import BlockQuote from "./components/BlockQuote";
import HeadingWithLink from "./components/HeadingWithLink";
import { InlineCode, CodeBlock } from "./components/Code";
import useIsUrlExternal from "./hooks/useIsUrlExternal";
import { getTextFromChildren } from "./utils/common";
import { useTableOfContentsRegister } from "./services/table-of-contents";
import PropsTable, { TableHeadCell } from "./docs-table";

export const p = ({ children }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <Text>{children}</Text>
);

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

function createHeadingComponent(
  tag: HeadingTag,
  { type, spaceAfter }: { type: Type } & SpaceAfter,
) {
  const HeadingComponent = ({ noId, children }: { noId?: boolean; children: React.ReactNode }) => {
    const level = Number(tag.slice(1)) - 2;
    useTableOfContentsRegister({
      title: getTextFromChildren(children),
      level,
    });

    return (
      <HeadingWithLink level={level} noId={noId} spaceAfter={spaceAfter}>
        <Heading as={tag} type={type}>
          {children}
        </Heading>
      </HeadingWithLink>
    );
  };

  HeadingComponent.displayName = `TOC(${tag})`;
  return HeadingComponent;
}

export const h1 = createHeadingComponent("h1", { type: "title1", spaceAfter: "small" });
export const h2 = createHeadingComponent("h2", { type: "title2", spaceAfter: "small" });
export const h3 = createHeadingComponent("h3", { type: "title3", spaceAfter: "normal" });
export const h4 = createHeadingComponent("h4", { type: "title4", spaceAfter: "smallest" });
export const h5 = createHeadingComponent("h5", { type: "title5" });
export const h6 = createHeadingComponent("h6", { type: "title5" });

export const hr = () => <Separator spaceAfter="largest" />;

export const ol = ({ children }: React.OlHTMLAttributes<HTMLOListElement>) => (
  <ol
    css={css`
      list-style: decimal none outside;
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

export const blockquote = BlockQuote;

export const table = ({ children }: React.TableHTMLAttributes<HTMLTableElement>) => (
  <PropsTable>{children}</PropsTable>
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

export const td = ({ children, align, valign }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <TableCell
    as="td"
    align={align === "left" || align === "center" || align === "right" ? align : undefined}
    whiteSpace="normal"
    verticalAlign={valign}
  >
    {children}
  </TableCell>
);

export const th = ({ children }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
  <TableHeadCell as="th">{children}</TableHeadCell>
);

export const ul = ({ children }: React.HTMLAttributes<HTMLUListElement>) => (
  <ul
    css={css`
      list-style: disc none outside;
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

const LinkForOrbitTextLink = ({ href, ...props }: { href: string }) => (
  <Link to={href} {...props} />
);

export const a = function Anchor({
  children,
  href,
  orbitType,
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  orbitType?: React.ComponentProps<typeof TextLink>["type"];
}) {
  const isExternal = useIsUrlExternal(href);
  const useExternalIcon = isExternal && typeof children === "string";
  return (
    <TextLink
      // @ts-expect-error type declaration is not permissive enough
      asComponent={isExternal ? "a" : LinkForOrbitTextLink}
      type={orbitType}
      href={href}
      external={isExternal}
      iconRight={useExternalIcon && <NewWindow ariaLabel="Opens in new window" />}
    >
      {children}
    </TextLink>
  );
};

export const Callout = ({ icon = true, ...props }) => (
  <Alert icon={icon} spaceAfter="large" {...props} />
);
