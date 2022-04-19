import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Alert, Text, Heading } from "@kiwicom/orbit-components";

import OrbitTeam from "./OrbitTeam";
import Contributor from "./Contributor";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  grid-gap: ${({ theme }) => theme.orbit.spaceTwoX};
`;

export interface Contributor {
  id: string | number;
  active: boolean;
  name: string;
  username: string;
  position: string;
  avatar_url: string;
  info: string;
  website?: string;
  twitter?: string;
  dribbble?: string;
  github?: string;
}

const ContributorsComponent = () => {
  const { allContributor } = useStaticQuery(
    graphql`
      query CollaboratorsQuery {
        allContributor {
          nodes {
            id
            name
            username
            info
            active
            position
            error
            dribbble
            avatar_url
            github
            twitter
            website
          }
        }
      }
    `,
  );

  const { core, all, error } = allContributor.nodes.reduce(
    (acc, cur) => {
      if (cur.error) acc.error = cur.error;
      if (cur.id.match("-")) {
        acc.all.push(cur);
      } else {
        acc.core.push(cur);
      }

      return acc;
    },
    { core: [], all: [], error: "" },
  );

  return (
    <>
      <OrbitTeam contributors={core} />
      <Heading type="title2" as="h2">
        All contributors
      </Heading>
      <Text>
        From small reviews or additions to contributions of whole components. We really appreciate
        all your efforts when helping us make Orbit better. 👏
      </Text>
      <Heading type="title3" as="h3">
        React components
      </Heading>
      <Text>
        Thanks to all these folks for caring! Your contributions have helped all Orbit consumers.
      </Text>
      {error ? (
        <Alert type="warning">
          <Text>{error}</Text>
        </Alert>
      ) : (
        <Grid>
          {all
            // exclude robots 😅
            .filter(contributor => !contributor.username?.includes("dependabot"))
            .map(contributor => (
              <Contributor key={contributor.username} {...contributor} />
            ))}
        </Grid>
      )}
    </>
  );
};

export default ContributorsComponent;
