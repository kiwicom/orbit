import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "styled-components";
import Img from "gatsby-image";
import { Heading, Stack } from "@kiwicom/orbit-components";

import Member from "./TeamMember";

import { Contributor } from ".";

interface Props {
  currentContributors: Contributor[];
  previousContributors: Contributor[];
}

const OrbitTeam = ({ currentContributors, previousContributors }: Props) => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/team/" } }) {
        edges {
          node {
            childImageSharp {
              id
              fluid(quality: 100) {
                srcWebp
                srcSet
                src
                sizes
                originalName
              }
            }
          }
        }
      }
    }
  `);

  const getImg = (id: string) =>
    allFile.edges
      .map(n => n.node.childImageSharp && n.node.childImageSharp.fluid)
      .filter(Boolean)
      .find(n => n.originalName.includes(id));

  return (
    <Stack direction="column" spacing="large" spaceAfter="large">
      <Heading type="title1" as="h3">
        Core team
      </Heading>
      {currentContributors.map(({ id, username, ...info }) => {
        return (
          <Member
            key={id}
            username={username}
            id={id}
            {...info}
            image={
              <Img
                css={css`
                  border-radius: 8px;
                  min-width: 120px;
                  height: 120px;
                `}
                fluid={getImg(username)}
              />
            }
          />
        );
      })}
      <Heading type="title1" as="h3">
        Former members
      </Heading>
      {previousContributors.map(({ id, username, ...info }) => {
        return (
          <Member
            key={id}
            username={username}
            id={id}
            {...info}
            image={
              <Img
                css={css`
                  border-radius: 8px;
                  min-width: 120px;
                  height: 120px;
                `}
                fluid={getImg(username)}
              />
            }
          />
        );
      })}
    </Stack>
  );
};

export default OrbitTeam;
