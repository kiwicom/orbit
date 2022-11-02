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
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
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
            position: relative;
            top: 40px;
            right: 0;
            width: 60vw;
            min-width: 400px;
            max-width: 850px;

            &:after {
              position: absolute;
              content: "";
              bottom: 0;
              width: 100%;
              height: 300px;
              background: linear-gradient(0deg, #ffffff 6.03%, rgba(255, 255, 255, 0) 100%);
            }
          `}
          style={{ position: "absolute" }} // to override gatsby-image's position
        />
      )}
    </StyledImageWrapper>
  );
}
