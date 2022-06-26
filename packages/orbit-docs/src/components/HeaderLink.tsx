import React from "react";
import Figma from "@icons-pack/react-simple-icons/lib/components/Figma";
import Github from "@icons-pack/react-simple-icons/lib/components/Github";
import { Button, ButtonLink } from "@kiwicom/orbit-components";
import { NewWindow } from "@kiwicom/orbit-components/icons";

interface Props {
  href: string;
}

const HeaderLink = ({
  as: ButtonComponent,
  href,
}: Props & {
  as: typeof Button | typeof ButtonLink;
}) => {
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
      case "www.figma.com":
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
    <ButtonComponent
      external
      href={href}
      iconLeft={getUsedIcon()}
      iconRight={<NewWindow ariaLabel="Opens in new window" />}
      type="secondary"
    >
      {getUsedText()}
    </ButtonComponent>
  );
};

export const HeaderButton = (props: Props) => <HeaderLink as={Button} {...props} />;
export const HeaderButtonLink = (props: Props) => <HeaderLink as={ButtonLink} {...props} />;
