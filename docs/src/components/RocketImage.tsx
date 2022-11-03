import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";
import { mediaQueries as mq } from "@kiwicom/orbit-components";

const StyledImageWrapper = styled.div`
  display: none;
  ${mq.desktop(css`
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    z-index: -1;
  `)}

  [data-main-image] {
    opacity: 1;
    transition: none;
  }
`;

export default function RocketImage() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "rocket.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, backgroundColor: "transparent")
        }
      }
    }
  `);

  const image = getImage(data.file);

  return (
    <StyledImageWrapper>
      {image && (
        <GatsbyImage
          alt="orbit-rocket"
          image={image}
          css={css`
            bottom: 0;
            right: 0;
            width: 600px;
          `}
          style={{ position: "absolute" }} // to override gatsby-image's position
        />
      )}
    </StyledImageWrapper>
  );
}
