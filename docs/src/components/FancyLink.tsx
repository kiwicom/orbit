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
            return <Download ariaHidden />;
          case "color-picker":
            return <ColorPicker ariaHidden />;
          case "figma":
            return <Figma ariaHidden />;
          case "github":
            return <Github ariaHidden />;
          case "google":
            return <Google ariaHidden />;
          case "react":
            return <ReactJs ariaHidden />;
          case "storybook":
            return <Storybook ariaHidden />;
          case "playroom":
            return <Code ariaHidden />;
          case "lightbulb":
            return <Tips ariaHidden />;
          default:
            return <FlightDirect ariaHidden />;
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
