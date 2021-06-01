import React from "react";
import styled from "styled-components";
import { Figma, Github } from "@icons-pack/react-simple-icons";
import { ButtonLink } from "@kiwicom/orbit-components";
import { NewWindow } from "@kiwicom/orbit-components/icons";

const StyledContainer = styled.div`
  padding: 0 12px;
`;

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
    <StyledContainer>
      <ButtonLink
        compact
        external
        href={href}
        iconLeft={getUsedIcon()}
        iconRight={<NewWindow />}
        type="secondary"
      >
        {getUsedText()}
      </ButtonLink>
    </StyledContainer>
  );
};

export default FancyLink;
