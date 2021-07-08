import React from "react";
import styled from "styled-components";
import Figma from "@icons-pack/react-simple-icons/lib/components/Figma";
import Storybook from "@icons-pack/react-simple-icons/lib/components/Storybook";
import Spectrum from "@icons-pack/react-simple-icons/lib/components/Spectrum";
import ReactJs from "@icons-pack/react-simple-icons/lib/components/ReactJs";
import Github from "@icons-pack/react-simple-icons/lib/components/Github";
import { ColorPicker, Download, FlightDirect, Google, Tips } from "@kiwicom/orbit-components/icons";
import { Tile } from "@kiwicom/orbit-components";

import useIsUrlExternal from "../hooks/useIsUrlExternal";

type IconNames =
  | "color-picker"
  | "download"
  | "figma"
  | "github"
  | "google"
  | "lightbulb"
  | "react"
  | "spectrum"
  | "storybook";

interface Props {
  download?: boolean;
  icon: IconNames | React.ReactNode;
  title: string;
  href: string;
}

const StyledAnchor = styled.a`
  margin-top: 12px;
  display: block;
`;

const FancyLink = ({ download, href, icon, title }: Props) => {
  const isExternal = useIsUrlExternal(href);

  const usedIcon = () => {
    switch (typeof icon) {
      case "string":
        switch (icon) {
          case "download":
            return <Download />;
          case "color-picker":
            return <ColorPicker />;
          case "figma":
            return <Figma />;
          case "github":
            return <Github />;
          case "google":
            return <Google />;
          case "react":
            return <ReactJs />;
          case "spectrum":
            return <Spectrum />;
          case "storybook":
            return <Storybook />;
          case "lightbulb":
            return <Tips />;
          default:
            return <FlightDirect />;
        }
      default:
        return icon;
    }
  };
  return (
    <>
      {download ? (
        <StyledAnchor href={href} download>
          <Tile title={title} icon={usedIcon()} />
        </StyledAnchor>
      ) : (
        <Tile title={title} icon={usedIcon()} href={href} external={isExternal} />
      )}
    </>
  );
};

export default FancyLink;
