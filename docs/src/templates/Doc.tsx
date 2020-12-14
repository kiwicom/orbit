import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Heading } from "@kiwicom/orbit-components";
import Layout from "../components/Layout";
import Prose from "../components/Prose";
import * as components from "../mdx-components";

interface Props {
  data: {
    mdx: {
      frontmatter: {
        title: string;
      };
      body: string;
    };
  };
}

export default function Doc({ data }: Props) {
  const { frontmatter, body } = data.mdx;
  return (
    <Layout>
      <Prose>
        <Heading as="h1" type="display">
          {frontmatter.title}
        </Heading>
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Prose>
    </Layout>
  );
}

export const query = graphql`
  query DocQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;
