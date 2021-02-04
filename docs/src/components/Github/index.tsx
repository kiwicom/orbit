import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Contributor from "./Contributor";

export interface IContributor {
  name?: string;
  id?: string;
  avatarUrl?: string;
  bio?: string;
  websiteUrl?: string;
  twitterUsername?: string;
  url?: string;
}

const ContributorsComponent = () => {
  const { github } = useStaticQuery(
    graphql`
      query CollaboratorsQuery {
        github {
          repository(name: "orbit", owner: "kiwicom") {
            collaborators {
              nodes {
                bio
                avatarUrl
                id
                name
                url
                websiteUrl
                twitterUsername
              }
            }
          }
        }
      }
    `,
  );

  return (
    <>
      {github.repository.collaborators.nodes.map(({ id, ...info }) => (
        <Contributor key={id} id={id} {...info} />
      ))}
    </>
  );
};

export default ContributorsComponent;
