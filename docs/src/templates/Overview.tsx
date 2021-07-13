import React from "react";
import { PageRendererProps } from "gatsby";
import { Grid } from "@kiwicom/orbit-components";

import DocLayout from "../components/DocLayout";
import Tile from "../components/Tile";
import { useTableOfContents } from "../services/table-of-contents";

interface Props extends PageRendererProps {
  pageContext: {
    slug: string;
    title: string;
    trail: Array<{
      name: string;
      url: string;
    }>;
    pages: Array<{
      title: string;
      description?: string;
      slug: string;
    }>;
  };
}

const Overview = ({ location, pageContext }: Props) => {
  const { slug, title, trail, pages } = pageContext;

  const [tableOfContents] = useTableOfContents()

  return (
    <DocLayout location={location} path={slug} title={title} trail={trail} noElevation>
      <Grid
        columns="1fr"
        gap="2rem"
        largeMobile={{ columns: "repeat(2, 1fr)" }}
        {...(tableOfContents.length > 0 ? { desktop: { columns: "repeat(3, 1fr)" }, largeDesktop: { columns: "repeat(2, 1fr)" }, } : { tablet: { columns: "repeat(3, 1fr)" }, })}
      >
        {pages.map(page => (
          <Tile key={page.slug} title={page.title} href={page.slug}>
            {page.description}
          </Tile>
        ))}
      </Grid>
    </DocLayout>
  );
};

export default Overview;
