import React from "react";
import { Figma, Github } from "@icons-pack/react-simple-icons";
import { ButtonLink } from "@kiwicom/orbit-components";
import { NewWindow } from "@kiwicom/orbit-components/icons";

interface Props {
  href: string;
}

const FancyLink = ({ href }: Props) => {
  const getDomain = () => {
    const matches = href.match(/\/\/(?<domain>[a-zA-Z.0-9]*)/);
    if (matches && matches.groups) {
      return matches.groups.domain;
    }
    return undefined;
  };
  const domain = getDomain();
  const getUsedIcon = () => {
    switch (domain) {
      case "figma.com":
        return <Figma />;
      case "github.com":
        return <Github />;
      default:
        return "";
    }
  };

  const getUsedText = () => {
    switch (domain) {
      case "figma.com":
      case "www.figma.com":
        return "Figma";
      case "github.com":
        return "GitHub";
      default:
        return "";
    }
  };
  return (
    <ButtonLink
      external
      href={href}
      iconLeft={getUsedIcon()}
      iconRight={<NewWindow ariaLabel="Opens in new window" />}
      type="secondary"
    >
      {getUsedText()}
    </ButtonLink>
  );
};

export default FancyLink;
