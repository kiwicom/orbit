import React from "react";
import { navigate, PageRendererProps, graphql } from "gatsby";

import ComponentsList from "./components/ComponentList";
import { isLoggedIn } from "../../services/auth";
import DocLayout from "../../components/DocLayout";

import { TrackingNode } from ".";

interface Props extends PageRendererProps {
  pageContext: {
    slug: string;
    title: string;
    trail: Array<{
      name: string;
      url: string;
    }>;
  };
  data: {
    allTracking: {
      nodes: TrackingNode[];
    };
  };
}

const AllRepositories = ({ location, pageContext, data }: Props) => {
  const [render, setRender] = React.useState(false);

  React.useEffect(() => {
    if (!isLoggedIn() && location.pathname === "/dashboard/tracking/") {
      navigate(`/dashboard/login/`);
    } else {
      setRender(true);
    }
  }, [setRender]);

  const { slug, title, trail } = pageContext;

  const components = data.allTracking.nodes.reduce((acc, cur) => {
    cur.trackedData
      .filter(source => !source.icon)
      .forEach(({ name, instances, category, isDeprecated }) => {
        if (!acc[name]) {
          acc[name] = {
            name,
            instances,
            category,
            isDeprecated,
            slug: `/dashboard/tracking/allrepositories/${name.toLowerCase()}`,
          };
        } else {
          const prev = acc[name];

          acc[name] = {
            ...acc[name],
            instances: prev.instances + instances,
          };
        }
      });

    return acc;
  }, []);

  return (
    render && (
      <DocLayout location={location} path={slug} title={title} trail={trail} noElevation>
        <ComponentsList components={Object.values(components)} />
      </DocLayout>
    )
  );
};

export const query = graphql`
  query AllRepositoriesTracking {
    # get only the latest
    allTracking(sort: { fields: createdAt, order: DESC }, limit: 8) {
      nodes {
        createdAt
        trackedData {
          instances
          category
          icon
          isDeprecated
          name
        }
      }
    }
  }
`;

export default AllRepositories;
