import React from "react";
import { PageRendererProps } from "gatsby";
import { Grid } from "@kiwicom/orbit-components";
import { sortBy, upperFirst } from "lodash";

import DocLayout from "../DocLayout";
import Tile from "../Tile";
import useDevMode from "../../hooks/useDevMode";

const Tracking = ({ location, pages }: PageRendererProps) => {
  const [devMode] = useDevMode();

  const allPages = pages.map(({ name, description }) => {
    const url = `/dashboard/tracking/${name.toLowerCase()}`;

    return {
      slug: url,
      title: upperFirst(name),
      description,
      hasReactTab: false,
    };
  });

  allPages.push({
    slug: "/dashboard/tracking/allrepositories/",
    title: "All Repositories",
    description: "Combined data from all repositories on single page",
    hasReactTab: false,
  });

  allPages.push({
    slug: "/dashboard/difference/",
    title: "Tracking difference",
    description: "Shows difference between the first and last tracked data",
    hasReactTab: false,
  });

  return (
    <DocLayout location={location} path="dashboard/tracking" title="Tracking" noElevation>
      <Grid
        columns="1fr"
        gap="2rem"
        largeMobile={{ columns: "repeat(2, 1fr)" }}
        desktop={{ columns: "repeat(3, 1fr)" }}
        largeDesktop={{ columns: "repeat(2, 1fr)" }}
      >
        {sortBy(allPages, ["title"]).map(
          ({ title: pageTitle, slug: pageSlug, description, hasReactTab }) => {
            return (
              <Tile
                key={pageSlug}
                title={pageTitle}
                href={hasReactTab && devMode ? `${pageSlug}react/` : pageSlug}
              >
                {description}
              </Tile>
            );
          },
        )}
      </Grid>
    </DocLayout>
  );
};

export default Tracking;
