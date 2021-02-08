import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Contributor from "./Contributor";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  grid-gap: ${({ theme }) => theme.orbit.spaceXSmall};
`;

export interface IContributor {
  name?: string;
  id?: string;
  // eslint-disable-next-line camelcase
  avatar_url?: string;
  bio?: string;
  blog?: string;
  // eslint-disable-next-line camelcase
  twitter_username?: string;
  url?: string;
}

const ContributorsComponent = () => {
  const { allContributor } = useStaticQuery(
    graphql`
      query CollaboratorsQuery {
        allContributor {
          edges {
            node {
              id
              avatar_url
              bio
              blog
              twitter_username
              name
              url
            }
          }
        }
      }
    `,
  );

  return (
    <Grid>
      {allContributor.edges
        .map(n => n.node)
        .map(({ id, ...info }) => {
          return <Contributor key={id} id={id} {...info} />;
        })}
    </Grid>
  );
  return null;
};

export default ContributorsComponent;
