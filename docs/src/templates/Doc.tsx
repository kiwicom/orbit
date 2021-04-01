import React from "react";
import { graphql, PageRendererProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import DocLayout from "../components/DocLayout";
import { TabObject } from "../components/Tabs";
import { TocItemObject } from "../components/TableOfContents";

interface Props extends PageRendererProps {
  data: {
    mdx: {
      fields: {
        description: string;
        slug: string;
        title: string;
      };
      body: string;
      tableOfContents: { items: TocItemObject[] };
    };
    tabs: {
      nodes: {
        frontmatter: {
          title: string;
        };
        fields: {
          slug: string;
          tabCollection: string | null;
        };
      }[];
    };
  };
}

export default function Doc({ data, location }: Props) {
  const { fields, body, tableOfContents } = data.mdx;
  const tabs = data.tabs.nodes[0].fields.tabCollection !== null ? data.tabs.nodes : [];
  const usedTabs: TabObject[] = tabs.map(tab => ({
    slug: tab.fields.slug,
    tabCollection: tab.fields.tabCollection,
    title: tab.frontmatter.title,
  }));
  return (
    <DocLayout
      path={fields.slug}
      location={location}
      title={fields.title}
      description={fields.description}
      tabs={usedTabs}
      tableOfContents={tableOfContents.items}
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
      tableOfContents
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
