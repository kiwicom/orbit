import React from "react";
import styled from "styled-components";
import { Figma, Github, ReactJs, Spectrum, Storybook } from "@icons-pack/react-simple-icons";
import { ColorPicker, Download, FlightDirect, Google, Tips } from "@kiwicom/orbit-components/icons";
import { Tile } from "@kiwicom/orbit-components";

import useIsUrlExternal from "../hooks/useIsUrlExternal";

interface FancyLinkProps {
  download: boolean;
  icon: string | React.ReactNode;
  title: string;
  href: string;
}

const StyledAnchor = styled.a`
  margin-top: 12px;
  display: block;
`;

const FancyLink = ({ download, href, icon, title }: FancyLinkProps) => {
  const isExternal = useIsUrlExternal(href);

  let usedIcon = icon || <FlightDirect />;

  // If not passing an icon
  if (typeof icon === "string") {
    switch (icon) {
      case "download":
        usedIcon = <Download />;
        break;
      case "color-picker":
        usedIcon = <ColorPicker />;
        break;
      case "figma":
        usedIcon = <Figma />;
        break;
      case "github":
        usedIcon = <Github />;
        break;
      case "google":
        usedIcon = <Google />;
        break;
      case "react":
        usedIcon = <ReactJs />;
        break;
      case "spectrum":
        usedIcon = <Spectrum />;
        break;
      case "storybook":
        usedIcon = <Storybook />;
        break;
      case "lightbulb":
        usedIcon = <Tips />;
        break;
      default:
        usedIcon = <FlightDirect />;
    }
  }
  return (
    <>
      {download ? (
        <StyledAnchor href={href} download>
          <Tile title={title} icon={usedIcon} />
        </StyledAnchor>
      ) : (
        <Tile title={title} icon={usedIcon} href={href} external={isExternal} />
      )}
    </>
  );
};

export default FancyLink;
