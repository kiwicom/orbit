import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Text, Heading } from "@kiwicom/orbit-components";

import OrbitTeam from "./OrbitTeam";
import Contributor from "./Contributor";
import AllContributors from "./AllContributors";

export interface Contributor {
  id: string;
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
        allContributor(filter: { core: { eq: true } }) {
          nodes {
            id
            name
            username
            info
            active
            core
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

  const { nodes } = allContributor;
  const currentContributors = nodes.filter(node => node.active);
  const previousContributors = nodes.filter(node => !node.active);

  return (
    <>
      <OrbitTeam
        currentContributors={currentContributors}
        previousContributors={previousContributors}
      />
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
      <AllContributors />
    </>
  );
};

export default ContributorsComponent;
