import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import styled, { css } from "styled-components";
import { mediaQueries as mq } from "@kiwicom/orbit-components";

const StyledImageWrapper = styled.div`
  display: none;
  ${mq.desktop(css`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `)}
`;

export default function RocketImage() {
  const data: {
    file: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "rocket.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);

  return (
    <StyledImageWrapper>
      <Img
        css={css`
          top: 0;
          right: 0;
          width: 60vw;
          min-width: 400px;
          max-width: 904px;
          transform: translate(26%, -6%);
        `}
        style={{ position: "absolute" }} // to override gatsby-image's position
        fluid={data.file.childImageSharp.fluid}
      />
    </StyledImageWrapper>
  );
}

export { FluidObject };
