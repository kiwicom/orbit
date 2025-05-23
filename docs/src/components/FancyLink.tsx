import React from "react";
import styled from "styled-components";
import {
  SiGithub as Github,
  SiFigma as Figma,
  SiStorybook as Storybook,
  SiReact as ReactJs,
} from "@icons-pack/react-simple-icons";
import {
  ColorPicker,
  Download,
  FlightDirect,
  Google,
  Tips,
  Code,
} from "@kiwicom/orbit-components/icons";
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
  | "storybook"
  | "playroom";

interface Props {
  download?: boolean;
  icon: IconNames | React.ReactNode;
  title: string;
  href: string;
}

const StyledAnchor = styled.a<React.AnchorHTMLAttributes<HTMLAnchorElement>>`
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
          case "storybook":
            return <Storybook />;
          case "playroom":
            return <Code />;
          case "lightbulb":
            return <Tips />;
          default:
            return <FlightDirect />;
        }
      default:
        return icon;
    }
  };
  return download ? (
    <StyledAnchor href={href} download>
      <Tile title={title} icon={usedIcon()} />
    </StyledAnchor>
  ) : (
    <Tile title={title} icon={usedIcon()} href={href} external={isExternal} />
  );
};

export default FancyLink;
