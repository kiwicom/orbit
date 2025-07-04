import React from "react";
import styled, { css } from "styled-components";
import Img, { FixedObject, FluidObject } from "gatsby-image";
import { ButtonLink, Heading, Stack } from "@kiwicom/orbit-components";
import { Download } from "@kiwicom/orbit-components/icons";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";
import { useStaticQuery, graphql } from "gatsby";

import bizdevAssets from "../data/bizdev-assets.yaml";
import useCopyToClipboard from "../hooks/useCopyToClipboard";

const StyledAnchor = styled.a<React.AnchorHTMLAttributes<HTMLAnchorElement>>`
  ${({ theme }) => css`
    background-color: ${theme.orbit.paletteProductLight};
    color: ${theme.orbit.paletteProductNormal};
    padding: 0 ${theme.orbit.space300} 0 ${theme.orbit.space200};
    padding-top: ${theme.orbit.space100};
    height: ${theme.orbit.formBoxSmallHeight};
    border-radius: ${theme.orbit.borderRadius100};
    transition: all ${theme.orbit.durationFast} ease-in;

    &:hover,
    &:active,
    &:focus {
      background-color: ${theme.orbit.paletteProductLightHover};
      color: ${theme.orbit.paletteProductDark};
    }
  `}
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
`;

interface ImageWrapProps {
  width: string;
}

const ImageWrap = styled.div<ImageWrapProps & React.HTMLAttributes<HTMLDivElement>>`
  ${({ theme, width }) => css`
    padding: ${theme.orbit.space300};
    border: 1px solid ${theme.orbit.elevationFlatBorderColor};
    border-radius: ${theme.orbit.borderRadius100};
    margin-top: ${theme.orbit.space400};
    width: ${width};
    margin-right: 2%;
  `};
`;

const ImageCenterer = styled.div`
  padding: 24px 0;
  text-align: center;
  display: block;
`;

const CopyButton = ({ url }) => {
  const [isCopied, copy] = useCopyToClipboard();
  return (
    <ButtonLink size="small" disabled={isCopied} onClick={() => copy(`https://orbit.kiwi${url}`)}>
      {isCopied ? "Copied!" : "Copy URL"}
    </ButtonLink>
  );
};

interface ImageData {
  publicURL: string;
  relativePath: string;
  childImageSharp: {
    fixed: FixedObject;
    fluid: FluidObject;
  };
}

interface ImagesDownloadListProps {
  listName: "headers" | "icons";
}

const ImagesDownloadList = ({ listName }: ImagesDownloadListProps) => {
  const { isDesktop, isMediumMobile } = useMediaQuery();

  const data: {
    allFile: {
      nodes: ImageData[];
    };
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "bizdev" } }) {
        nodes {
          publicURL
          relativePath
          childImageSharp {
            fixed(width: 48, height: 48) {
              ...GatsbyImageSharpFixed
            }
            fluid(fit: CONTAIN) {
              ...GatsbyImageSharpFluid
            }
            original {
              src
            }
          }
        }
      }
    }
  `);

  const imageWrapWidth = () => {
    if (listName === "headers") {
      return "100%";
    }
    return isDesktop ? "31%" : "100%";
  };

  return (
    <ImageContainer>
      {bizdevAssets[listName].map(asset => {
        const assetData = data.allFile.nodes.find(image => image.relativePath === asset.path);
        if (!assetData) return "";

        // Fixed size for the smaller icons and fluid for wider headers
        const imageProp =
          listName === "icons"
            ? { fixed: assetData.childImageSharp.fixed }
            : { fluid: assetData.childImageSharp.fluid };

        return (
          <ImageWrap width={imageWrapWidth()}>
            <ImageCenterer>
              <Img {...imageProp} alt="" />
            </ImageCenterer>
            <Stack
              spacing="300"
              direction={imageWrapWidth() === "100%" && isMediumMobile ? "row" : "column"}
              justify="between"
              align={imageWrapWidth() === "100%" ? "center" : "start"}
            >
              <Heading as="h3" type="title2">
                {asset.alt}
              </Heading>
              <Stack
                justify={imageWrapWidth() === "100%" && isMediumMobile ? "end" : "between"}
                shrink
                basis="content"
              >
                <StyledAnchor href={assetData.publicURL} download>
                  <Stack spacing="100" align="center">
                    <Download size="small" ariaHidden />
                    <div>Download</div>
                  </Stack>
                </StyledAnchor>
                <CopyButton url={assetData.publicURL} />
              </Stack>
            </Stack>
          </ImageWrap>
        );
      })}
    </ImageContainer>
  );
};

export default ImagesDownloadList;
