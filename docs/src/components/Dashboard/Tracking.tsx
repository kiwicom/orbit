import React from "react";
import { PageRendererProps, graphql, useStaticQuery } from "gatsby";
import { Grid } from "@kiwicom/orbit-components";
import { sortBy, upperFirst } from "lodash";

import DocLayout from "../DocLayout";
import Tile from "../Tile";
import useDevMode from "../../hooks/useDevMode";
import useIsMounted from "../../hooks/useIsMounted";
import { SchemeTrackingNode } from "./interfaces";

const Tracking = ({ location }: PageRendererProps) => {
  const [devMode] = useDevMode();
  const isMounted = useIsMounted();

  const { allTracking }: SchemeTrackingNode = useStaticQuery(graphql`
    query TrackingPageQuery {
      allTracking(sort: { fields: createdAt, order: DESC }, limit: 8) {
        nodes {
          name
          createdAt
          description
          trackedData {
            icon
            name
          }
        }
      }
    }
  `);

  const pages = allTracking.nodes.map(({ name, description }) => {
    const url = `/dashboard/tracking/${name.toLowerCase()}`;

    return {
      slug: url,
      title: upperFirst(name),
      description,
      hasReactTab: false,
    };
  });

  pages.push({
    slug: "/dashboard/tracking/allrepositories/",
    title: "All Repositories",
    description: "Combined data from all repositories on single page",
    hasReactTab: false,
  });

  pages.push({
    slug: "/dashboard/difference/",
    title: "Tracking difference",
    description: "Shows difference between the first and last tracked data",
    hasReactTab: false,
  });

  return isMounted() ? (
    <DocLayout location={location} path="dashboard/tracking" title="Tracking" noElevation>
      <Grid
        columns="1fr"
        gap="2rem"
        largeMobile={{ columns: "repeat(2, 1fr)" }}
        desktop={{ columns: "repeat(3, 1fr)" }}
        largeDesktop={{ columns: "repeat(2, 1fr)" }}
      >
        {sortBy(pages, ["title"]).map(
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
  ) : null;
};

export default Tracking;
