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

interface Props {
  children: React.ReactNode;
}

export const p = Text;
export const h2 = (props: Props) => <Heading as="h2" type="title1" {...props} />;
export const h3 = (props: Props) => <Heading as="h3" type="title2" {...props} />;
export const h4 = (props: Props) => <Heading as="h4" type="title3" {...props} />;
export const h5 = (props: Props) => <Heading as="h5" type="title4" {...props} />;
export const h6 = (props: Props) => <Heading as="h6" type="title5" {...props} />;
export const table = Table;
export const thead = TableHead;
export const tbody = TableBody;
export const tr = TableRow;
export const td = TableCell;
export const th = TableCell;
export const code = CodeBlock;
export const inlineCode = InlineCode;
export const a = TextLink;
