import React from "react";
import styled from "styled-components";

import Tile from "../components/Tile";
import Layout from "../components/Layout";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 80vw;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

const Overview = ({ location, pageContext }) => {
  const { slug, pages } = pageContext;
  return (
    <Layout location={location} path={slug} title={slug}>
      <Container>
        <Grid>
          {pages.map(({ title, description, slug: pageSlug }) => {
            return (
              <Tile title={title} href={pageSlug.split("/").slice(1, pageSlug.length).join("/")}>
                {description}
              </Tile>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Overview;
