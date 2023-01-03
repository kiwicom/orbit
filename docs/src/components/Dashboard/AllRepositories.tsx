import React from "react";
import { PageRendererProps, graphql, useStaticQuery } from "gatsby";
import { sortBy } from "lodash";

import ComponentsList from "./components/ComponentList";
import DocLayout from "../DocLayout";
import { SchemeTrackingNode } from "./interfaces";

const AllRepositories = ({ location }: PageRendererProps) => {
  const { allTracking }: SchemeTrackingNode = useStaticQuery(graphql`
    query AllRepositoriesTracking {
      allTracking(sort: { createdAt: DESC }, limit: 8) {
        nodes {
          fields {
            currentComponents
          }
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
  `);

  const components = allTracking.nodes.reduce((acc, cur) => {
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

  const currentComponents = allTracking.nodes
    .map(n => n.fields.currentComponents)[0]
    .concat(["ToastRoot"]);

  const unusedComponents = currentComponents.filter(
    comp => !Object.keys(components).includes(comp),
  );

  return (
    <DocLayout
      location={location}
      path="/dashboard/tracking/allrepositories/"
      title="All Repositories"
      noElevation
    >
      <ComponentsList
        components={sortBy(Object.values(components), ["instances"]).reverse()}
        unused={unusedComponents}
      />
    </DocLayout>
  );
};

export default AllRepositories;
