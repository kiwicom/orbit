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
        hasHeaderLink: boolean;
        headerLink: string;
        slug: string;
        title: string;
        hasStorybook: boolean;
        storybookLink: string;
        breadcrumbs: Array<{
          name: string;
          url: string;
        }>;
      };
      body: string;
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
  const { fields, body } = data.mdx;
  const tabs = data.tabs.nodes[0].fields.tabCollection !== null ? data.tabs.nodes : [];
  const usedTabs: TabObject[] = tabs.map(tab => ({
    slug: tab.fields.slug,
    tabCollection: tab.fields.tabCollection,
    title: tab.frontmatter.title,
  }));
  return (
    <DocLayout
      description={fields.description}
      hasHeaderLink={fields.hasHeaderLink}
      headerLink={fields.headerLink}
      location={location}
      path={fields.slug}
      tabs={usedTabs}
      title={fields.title}
      breadcrumbs={fields.breadcrumbs}
      hasStorybook={fields.hasStorybook}
      storybookLink={fields.storybookLink}
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
        hasHeaderLink
        headerLink
        slug
        title
        hasStorybook
        storybookLink
        breadcrumbs {
          name
          url
        }
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
