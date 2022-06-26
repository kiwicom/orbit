import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "styled-components";
import Img from "gatsby-image";
import { Heading, Stack } from "@kiwicom/orbit-components";

import Member from "./TeamMember";

import { Contributor } from ".";

interface AllMembers {
  current: Contributor[];
  previous: Contributor[];
}

interface Props {
  contributors: Contributor[];
}

const OrbitTeam = ({ contributors }: Props) => {
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

  const getImg = id =>
    allFile.edges
      .map(n => n.node.childImageSharp && n.node.childImageSharp.fluid)
      .filter(Boolean)
      .find(n => n.originalName.includes(id));

  const splittedMembers = contributors.reduce<AllMembers>(
    (acc, cur) => {
      if (cur.active) {
        acc.current.push(cur);
      } else {
        acc.previous.push(cur);
      }

      return acc;
    },
    { current: [], previous: [] },
  );

  return (
    <Stack direction="column" spacing="large" spaceAfter="large">
      <Heading type="title1" as="h3">
        Core team
      </Heading>
      {splittedMembers.current.map(({ id, ...info }) => {
        return (
          <Member
            key={id}
            id={id}
            {...info}
            image={
              <Img
                css={css`
                  border-radius: 8px;
                  min-width: 120px;
                  height: 120px;
                `}
                fluid={getImg(id)}
              />
            }
          />
        );
      })}
      <Heading type="title1" as="h3">
        Former members
      </Heading>
      {splittedMembers.previous.map(({ id, ...info }) => {
        return (
          <Member
            key={id}
            id={id}
            {...info}
            image={
              <Img
                css={css`
                  border-radius: 8px;
                  min-width: 120px;
                  height: 120px;
                `}
                fluid={getImg(id)}
              />
            }
          />
        );
      })}
    </Stack>
  );
};

export default OrbitTeam;
