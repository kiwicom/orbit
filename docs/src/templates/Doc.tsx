import React from "react";
import { graphql, PageRendererProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import DocLayout from "../components/DocLayout";
import { TabObject } from "../components/Tabs";

interface Props extends PageRendererProps {
  data: {
    mdx: {
      fields: {
        description: string;
        slug: string;
        title: string;
      };
      body: string;
    };
    tabs: {
      nodes: TabObject[];
    };
  };
}

export default function Doc({ data, location }: Props) {
  const { fields, body } = data.mdx;
  const tabs = data.tabs.nodes[0].fields.tabCollection !== null ? data.tabs.nodes : [];
  return (
    <DocLayout
      path={fields.slug}
      location={location}
      title={fields.title}
      description={fields.description}
      tabs={tabs}
    >
      <MDXRenderer>{body}</MDXRenderer>
    </DocLayout>
  );
}

export const query = graphql`
  query DocQuery($id: String!, $tabs: String) {
    mdx(id: { eq: $id }) {
      fields {
        description
        slug
        title
      }
      body
    }
    tabs: allMdx(
      filter: { fields: { tabCollection: { eq: $tabs } } }
      sort: { fields: fileAbsolutePath }
    ) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
          tabCollection
        }
      }
    }
  }
`;
