import React from "react";
import { graphql, PageRendererProps } from "gatsby";

import DocLayout from "../components/DocLayout";
import { TabObject } from "../components/Tabs";

interface Props extends PageRendererProps {
  data: {
    mdx: {
      fields: {
        description: string;
        headerLink: string;
        slug: string;
        title: string;
        breadcrumbs: Array<{
          name: string;
          url: string;
        }>;
      };
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

export default function Doc({ data, location, children }: React.PropsWithChildren<Props>) {
  const { fields } = data.mdx;
  const tabs = data.tabs.nodes[0].fields.tabCollection !== null ? data.tabs.nodes : [];
  const usedTabs: TabObject[] = tabs.map(tab => ({
    slug: tab.fields.slug,
    tabCollection: tab.fields.tabCollection,
    title: tab.frontmatter.title,
  }));
  return (
    <DocLayout
      description={fields.description}
      headerLink={fields.headerLink}
      location={location}
      path={fields.slug}
      tabs={usedTabs}
      title={fields.title}
      breadcrumbs={fields.breadcrumbs}
    >
      {children}
    </DocLayout>
  );
}

export const query = graphql`
  query DocQuery($id: String!, $tabs: String) {
    mdx(id: { eq: $id }) {
      internal {
        contentFilePath
      }

      fields {
        description
        headerLink
        slug
        title
        breadcrumbs {
          name
          url
        }
      }
    }
    tabs: allMdx(
      filter: { fields: { tabCollection: { eq: $tabs } } } # sort: { internal: contentFilePath }
    ) {
      nodes {
        internal {
          contentFilePath
        }
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
