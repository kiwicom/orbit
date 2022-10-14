import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Contributor from "./Contributor";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  grid-gap: ${({ theme }) => theme.orbit.spaceXSmall};
`;

const AllContributors = () => {
  const { allContributor: restContributors } = useStaticQuery(
    graphql`
      query AllContributorsQuery {
        allContributor(filter: { core: { eq: false } }) {
          nodes {
            name
            username
            avatar_url
            github
          }
        }
      }
    `,
  );

  return (
    <Grid>
      {restContributors.nodes
        // exclude robots 😅
        .filter(contributor => !contributor.username?.includes("dependabot"))
        .map(contributor => (
          <Contributor key={contributor.username} {...contributor} />
        ))}
    </Grid>
  );
};

export default AllContributors;
