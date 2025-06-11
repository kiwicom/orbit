import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import {
  Alert,
  Heading,
  Separator,
  Text,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@kiwicom/orbit-components";

import BlockQuote from "../../components/MDXComponents/BlockQuote";
import { h1, h2, h3, h4, h5, h6 } from "../../components/MDXComponents/Heading";
import PropsTable from "../../components/MDXComponents/PropsTable";
import { a } from "../../components/MDXComponents/Anchor";
import * as Usage from "../../components/MDXComponents/Usage";
// // Import custom components to make them available globally
// import Palette from "../../ignore/Palette";
// import IconList from "../../ignore/IconList";
// import IllustrationList from "../../ignore/IllustrationList";
// import ElevationLevel from "../../ignore/ElevationLevel";
// import ImagesDownloadList from "../../ignore/ImagesDownloadList";
// import { ComponentDesignTokens, GlobalDesignTokens } from "../../ignore/DesignTokensList";
// import TailwindClassnames from "../../ignore/TailwindClassnames";
// import GithubContributors from "../../ignore/Github";
// import { ComponentStatusList } from "../../ignore/ComponentStatus";
import FigmaIframe from "../../components/MDXComponents/FigmaIframe";
import Guideline from "../../components/MDXComponents/Guideline";
import GuidelinesSideBySide, {
  Do,
  Dont,
} from "../../components/MDXComponents/GuidelinesSideBySide";
import ImageContainer from "../../components/MDXComponents/ImageContainer";
import FancyLink from "../../components/MDXComponents/FancyLink";
// import InlineToken from "../../ignore/InlineToken";
// import DocLayout from "../../ignore/DocLayout";

export const p = ({ children }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <Text>{children}</Text>
);

export const hr = () => <Separator spaceAfter="largest" />;

export const ol = ({ children }: React.OlHTMLAttributes<HTMLOListElement>) => (
  <ol className="ml-400 [&_ol]:m-300 [&_ul]:m-300 list-outside list-decimal">{children}</ol>
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
  <TableCell as="th">{children}</TableCell>
);

export const ul = ({ children }: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className="ml-400 [&_ol]:m-300 [&_ul]:m-300 list-outside list-disc">{children}</ul>
);

export const figcaption = ({ children }: React.HTMLAttributes<HTMLElement>) => (
  <figcaption>
    <Text align="center" italic>
      {children}
    </Text>
  </figcaption>
);

export const dd = ({ children }: React.HTMLAttributes<HTMLElement>) => (
  <dd className="ml-[2em]">
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

export function Callout({ icon = true, ...props }) {
  return <Alert icon={icon} spaceAfter="large" {...props} />;
}

export default {
  ...MDXComponents,
  // Override default components
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  ol,
  ul,
  blockquote,
  table,
  thead,
  tbody,
  tr,
  td,
  th,
  figcaption,
  dd,
  dt,
  a,
  // Custom components available globally in MDX
  FancyLink,
  Callout,
  ...Usage,
  // Palette,
  // IconList,
  // IllustrationList,
  // ElevationLevel,
  // ImagesDownloadList,
  // ComponentDesignTokens,
  // GlobalDesignTokens,
  // TailwindClassnames,
  // GithubContributors,
  // ComponentStatusList,
  FigmaIframe,
  Guideline,
  ImageContainer,
  GuidelinesSideBySide,
  Do,
  Dont,
  // InlineToken,
  // DocLayout,
};
