import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Img, { FixedObject, FluidObject } from "gatsby-image";
import { ButtonLink, Heading, Stack } from "@kiwicom/orbit-components";
import { Download } from "@kiwicom/orbit-components/icons";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";
import { useStaticQuery, graphql } from "gatsby";
import { CopyToClipboard } from "react-copy-to-clipboard";

import bizdevAssets from "../data/bizdev-assets.yaml";
import theme from "../theme";

const StyledAnchor = styled.a`
  background-color: ${theme.orbit.paletteProductLight};
  color: ${theme.orbit.paletteProductNormal};
  padding: ${theme.orbit.paddingButtonSmallWithLeftIcon};
  padding-top: 4px;
  height: ${theme.orbit.heightButtonSmall};
  border-radius: ${theme.orbit.borderRadiusNormal}
  transition: all ${theme.orbit.durationFast} ease-in;

  &:hover,&:active,&:focus {
    background-color: ${theme.orbit.paletteProductLightHover};
    color: ${theme.orbit.paletteProductDark};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
`;

interface ImageWrapProps {
  width: string;
}

const ImageWrap = styled.div<ImageWrapProps>`
  padding: 12px;
  border: 1px solid ${theme.orbit.borderColorCard};
  border-radius: 6px;
  margin-top: 16px;
  width: ${props => props.width};
  margin-right: 2%;
`;

const ImageCenterer = styled.div`
  padding: 24px 0;
  text-align: center;
  display: block;
`;

const CopyButton = ({ url }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  });
  return (
    <CopyToClipboard text={`https://orbit.kiwi${url}`}>
      <ButtonLink size="small" disabled={copied} onClick={() => setCopied(true)}>
        {copied ? "Copied!" : "Copy URL"}
      </ButtonLink>
    </CopyToClipboard>
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
  list: "headers" | "icons";
}

const ImagesDownloadList = ({ list }: ImagesDownloadListProps) => {
  const { isDesktop } = useMediaQuery();

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

  let imageWrapWidth;
  if (list === "headers") {
    imageWrapWidth = "100%";
  } else {
    imageWrapWidth = isDesktop ? "31%" : "100%";
  }

  return (
    <ImageContainer>
      {bizdevAssets[list].map(asset => {
        const assetData = data.allFile.nodes.find(image => image.relativePath === asset.path);
        if (!assetData) {
          return "";
        }

        // Fixed size for the smaller icons and fluid for wider headers
        const imageProp =
          list === "icons"
            ? { fixed: assetData.childImageSharp.fixed }
            : { fluid: assetData.childImageSharp.fluid };

        return (
          <ImageWrap width={imageWrapWidth}>
            <ImageCenterer>
              <Img {...imageProp} alt="" />
            </ImageCenterer>
            <Stack
              spacing="small"
              direction={imageWrapWidth === "100%" ? "row" : "column"}
              justify="between"
              align={imageWrapWidth === "100%" ? "center" : "start"}
            >
              <Heading as="h3" type="title2">
                {asset.alt}
              </Heading>
              <Stack justify={imageWrapWidth === "100%" ? "end" : "between"} shrink basis="content">
                <StyledAnchor href={assetData.publicURL} download>
                  <Stack spacing="XXSmall" align="center">
                    <Download size="small" /> <div>Download</div>
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
