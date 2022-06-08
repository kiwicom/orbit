import React from "react";
import { PageRendererProps } from "gatsby";

import ComponentsList from "./components/ComponentList";
import DocLayout from "../DocLayout";

const AllRepositories = ({ location, pages }: PageRendererProps) => {
  const components = pages.reduce((acc, cur) => {
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
    <DocLayout
      location={location}
      path="/dashboard/tracking/allrepositories/"
      title="All Repositories"
      noElevation
    >
      <ComponentsList components={Object.values(components)} />
    </DocLayout>
  );
};

export default AllRepositories;
