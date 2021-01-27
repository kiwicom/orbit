import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Heading } from "@kiwicom/orbit-components";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Layout from "../components/Layout";
import Prose from "../components/Prose";
import * as components from "../mdx-components";
import AddBookmark from "../components/AddBookmark";
import { PageRendererProps } from "gatsby";
import { BookmarkProvider } from "../services/bookmarks";

interface Props extends PageRendererProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
      };
      fields: {
        slug: string;
      };
      body: string;
    };
  };
}

export default function Doc({ data, location }: Props) {
  const { frontmatter, fields, body } = data.mdx;
  return (
    <BookmarkProvider page={fields.slug} location={location}>
      <Layout>
        <Prose>
          <Stack inline align="center">
            <AddBookmark />
            <Heading as="h1" type="display">
              {frontmatter.title}
            </Heading>
          </Stack>
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </Prose>
      </Layout>
    </BookmarkProvider>
  );
}

export const query = graphql`
  query DocQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
      body
    }
  }
`;
