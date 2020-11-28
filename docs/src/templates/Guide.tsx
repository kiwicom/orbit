import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Heading } from "@kiwicom/orbit-components";
import Layout from "../components/Layout";
import Prose from "../components/Prose";
import * as components from "../mdx-components";

interface Props {
  pageContext: {
    title: string;
    body: string;
  };
}

export default function Guide({ pageContext }: Props) {
  const { title, body } = pageContext;
  return (
    <Layout>
      <Prose>
        <Heading as="h1" type="display">
          {title}
        </Heading>
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Prose>
    </Layout>
  );
}
