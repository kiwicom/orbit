import React from "react";
import { PageRendererProps, navigate } from "gatsby";
import { Grid } from "@kiwicom/orbit-components";
import { sortBy } from "lodash";

import { isLoggedIn } from "../services/auth";
import DocLayout from "../components/DocLayout";
import Tile from "../components/Tile";
import useDevMode from "../hooks/useDevMode";

interface Props extends PageRendererProps {
  pageContext: {
    slug: string;
    title: string;
    breadcrumbs: Array<{
      name: string;
      url: string;
    }>;
    pages: Array<{
      title: string;
      hasReactTab: boolean;
      description?: string;
      slug: string;
    }>;
  };
}

const Overview = ({ location, pageContext }: Props) => {
  const { slug, title, breadcrumbs, pages } = pageContext;
  const [devMode] = useDevMode();
  const [render, setRender] = React.useState(false);

  React.useEffect(() => {
    if (!isLoggedIn() && location.pathname === "/dashboard/tracking/") {
      navigate(`/dashboard/login/`);
    } else {
      setRender(true);
    }
  }, [setRender]);

  return (
    render && (
      <DocLayout location={location} path={slug} title={title} breadcrumbs={breadcrumbs}>
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
    )
  );
};

export default Overview;
