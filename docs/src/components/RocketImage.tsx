import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img, { FixedObject } from "gatsby-image";
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
        fixed: FixedObject;
        gatsbyImageData: {
          height: number;
          layout: string;
          width: number;
          images: {
            fallback: { src: string; srcSet: string };
            sources: Array<{ srcSet: string; sizes: string; type: string }>;
          };
          placeholder: {
            fallback: string;
          };
        };
      };
    };
  } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "rocket.png" }) {
        childImageSharp {
          fixed(width: 810, height: 852) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <StyledImageWrapper>
      <Img
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
        fixed={data.file.childImageSharp.fixed}
      />
    </StyledImageWrapper>
  );
}
