import React from "react";
import styled, { css } from "styled-components";
import { mediaQueries as mq, Heading, Grid } from "@kiwicom/orbit-components";
import Tile from "../components/Tile";
import Layout from "../components/Layout";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 80vw;
`;

const Overview = ({ location, pageContext }) => {
  const { slug, title, pages, redirect_from } = pageContext;

  return (
    <Layout location={location} path={slug} title={slug}>
      <Container>
        <Heading spaceAfter="largest">{title}</Heading>
        <Grid
          columns="1fr"
          gap="2rem"
          largeMobile={{ columns: "repeat(2, 1fr)" }}
          tablet={{ columns: "repeat(3, 1fr)" }}
        >
          {pages.map(({ title, description, slug: pageSlug }) => {
            return (
              <Tile
                key={pageSlug}
                title={title}
                href={pageSlug.split("/").slice(1, pageSlug.length).join("/")}
              >
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
