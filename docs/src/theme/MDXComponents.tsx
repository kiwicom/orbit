// import React from "react";
// import MDXComponents from "@theme-original/MDXComponents";
// import {
//   Alert,
//   Heading,
//   Separator,
//   Text,
//   TextLink,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
// } from "@kiwicom/orbit-components";
// import { NewWindow } from "@kiwicom/orbit-components/icons";
// import { SpaceAfter } from "@kiwicom/orbit-components/lib/common/types";
// import { Type } from "@kiwicom/orbit-components/lib/Heading/types";
// import Link from "@docusaurus/Link";

// import BlockQuote from "../../ignore/BlockQuote";
// import HeadingWithLink from "../../ignore/HeadingWithLink";
// import { InlineCode, CodeBlock } from "../../ignore/Code";
// import useIsUrlExternal from "../hooks/useIsUrlExternal";
// import PropsTable from "../../ignore/docs-table";
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
// import FigmaIframe from "../../ignore/FigmaIframe";
// import InlineToken from "../../ignore/InlineToken";
// import DocLayout from "../../ignore/DocLayout";

// export const p = ({ children }: React.HTMLAttributes<HTMLParagraphElement>) => (
//   <Text>{children}</Text>
// );

// type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

// function createHeadingComponent(
//   tag: HeadingTag,
//   { type, spaceAfter }: { type: Type } & SpaceAfter,
// ) {
//   function HeadingComponent({ noId, children }: { noId?: boolean; children: React.ReactNode }) {
//     const level = Number(tag.slice(1)) - 2;

//     return (
//       <HeadingWithLink level={level} noId={noId} spaceAfter={spaceAfter}>
//         <Heading as={tag} type={type}>
//           {children}
//         </Heading>
//       </HeadingWithLink>
//     );
//   }

//   HeadingComponent.displayName = `TOC(${tag})`;
//   return HeadingComponent;
// }

// export const h1 = createHeadingComponent("h1", { type: "title0", spaceAfter: "small" });
// export const h2 = createHeadingComponent("h2", { type: "title2", spaceAfter: "small" });
// export const h3 = createHeadingComponent("h3", { type: "title3", spaceAfter: "normal" });
// export const h4 = createHeadingComponent("h4", { type: "title4", spaceAfter: "smallest" });
// export const h5 = createHeadingComponent("h5", { type: "title5" });
// export const h6 = createHeadingComponent("h6", { type: "title5" });

// export const hr = () => <Separator spaceAfter="largest" />;

// export const ol = ({ children }: React.OlHTMLAttributes<HTMLOListElement>) => (
//   <ol className="ml-400 [&_ol]:m-300 [&_ul]:m-300 list-outside list-decimal">{children}</ol>
// );

// export const blockquote = BlockQuote;

// export const table = ({ children }: React.TableHTMLAttributes<HTMLTableElement>) => (
//   <PropsTable>{children}</PropsTable>
// );

// export const thead = ({ children }: React.HTMLAttributes<HTMLTableSectionElement>) => (
//   <TableHead>{children}</TableHead>
// );

// export const tbody = ({ children }: React.HTMLAttributes<HTMLTableSectionElement>) => (
//   <TableBody>{children}</TableBody>
// );

// export const tr = ({ children }: React.HTMLAttributes<HTMLTableRowElement>) => (
//   <TableRow>{children}</TableRow>
// );

// export const td = ({ children, align, valign }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
//   <TableCell
//     as="td"
//     align={align === "left" || align === "center" || align === "right" ? align : undefined}
//     whiteSpace="normal"
//     verticalAlign={valign}
//   >
//     {children}
//   </TableCell>
// );

// export const th = ({ children }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
//   <TableCell as="th">{children}</TableCell>
// );

// export const ul = ({ children }: React.HTMLAttributes<HTMLUListElement>) => (
//   <ul className="ml-400 [&_ol]:m-300 [&_ul]:m-300 list-outside list-disc">{children}</ul>
// );

// export const figcaption = ({ children }: React.HTMLAttributes<HTMLElement>) => (
//   <figcaption>
//     <Text align="center" italic>
//       {children}
//     </Text>
//   </figcaption>
// );

// export const code = CodeBlock;

// export const dd = ({ children }: React.HTMLAttributes<HTMLElement>) => (
//   <dd className="ml-[2em]">
//     <Text>{children}</Text>
//   </dd>
// );

// export const dt = ({ children }: React.HTMLAttributes<HTMLElement>) => (
//   <dt>
//     <Heading as="h3" type="title2">
//       {children}
//     </Heading>
//   </dt>
// );

// export const inlineCode = InlineCode;

// function LinkForOrbitTextLink({ href, ...props }: { href: string }) {
//   return <Link to={href} {...props} />;
// }

// export const a = function Anchor({
//   children,
//   href,
//   orbitType,
// }: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
//   orbitType?: React.ComponentProps<typeof TextLink>["type"];
// }) {
//   const isExternal = useIsUrlExternal(href);
//   const useExternalIcon = isExternal && typeof children === "string";
//   return (
//     <TextLink
//       asComponent={isExternal ? "a" : LinkForOrbitTextLink}
//       type={orbitType}
//       href={href}
//       external={isExternal}
//       iconRight={useExternalIcon && <NewWindow ariaLabel="Opens in new window" />}
//     >
//       {children}
//     </TextLink>
//   );
// };

// export function Callout({ icon = true, ...props }) {
//   return <Alert icon={icon} spaceAfter="large" {...props} />;
// }

// export default {
//   ...MDXComponents,
//   // Override default components
//   p,
//   h1,
//   h2,
//   h3,
//   h4,
//   h5,
//   h6,
//   hr,
//   ol,
//   ul,
//   blockquote,
//   table,
//   thead,
//   tbody,
//   tr,
//   td,
//   th,
//   figcaption,
//   code,
//   dd,
//   dt,
//   inlineCode,
//   a,
//   // Custom components available globally in MDX
//   Callout,
//   Palette,
//   IconList,
//   IllustrationList,
//   ElevationLevel,
//   ImagesDownloadList,
//   ComponentDesignTokens,
//   GlobalDesignTokens,
//   TailwindClassnames,
//   GithubContributors,
//   ComponentStatusList,
//   FigmaIframe,
//   InlineToken,
//   DocLayout,
// };
