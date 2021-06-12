import React from "react";
import styled from "styled-components";
import { Heading, Grid } from "@kiwicom/orbit-components";
import Tile from "../components/Tile";
import Layout from "../components/Layout";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 80vw;
`;

const Overview = ({ location, pageContext }) => {
  const { slug, title, pages } = pageContext;

  return (
    <Layout location={location} path={slug} title={title}>
      <Container>
        <Heading spaceAfter="largest">{title}</Heading>
        <Grid
          columns="1fr"
          gap="2rem"
          largeMobile={{ columns: "repeat(2, 1fr)" }}
          tablet={{ columns: "repeat(3, 1fr)" }}
        >
          {pages.map(({ title: pageTitle, description, slug: pageSlug }) => {
            return (
              <Tile key={pageSlug} title={pageTitle} href={pageSlug.split("/").slice(-1).join("/")}>
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
