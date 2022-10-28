import React from "react";
import { Hide, TextLink, Stack, Button, Popover } from "@kiwicom/orbit-components";
import { MenuHamburger } from "@kiwicom/orbit-components/lib/icons";

import PuzzleIcon from "../icons/Puzzle";
import ColorBrushIcon from "../../images/streamline-light/color-brush.svg";
import ReadArt from "../../images/streamline-light/read-art.svg";
import IrisScanIcon from "../../images/streamline-light/iris-scan.svg";
import ScriptIcon from "../../images/streamline-light/script.svg";

type Link = "Components" | "Guides" | "Tokens" | "Accessibility" | "Foundation";

interface Props {
  links?: Link[];
}

const LinkIcon = ({ name }: { name?: string }) => {
  const iconStyles = {
    stroke: "#252A31",
    width: "20px",
    height: "20px",
  };

  switch (name) {
    case "Components":
      return <PuzzleIcon {...iconStyles} />;
    case "Guides":
      return <ReadArt {...iconStyles} />;
    case "Tokens":
      return <ColorBrushIcon {...iconStyles} />;
    case "Accessibility":
      return <IrisScanIcon {...iconStyles} />;
    default:
      return <ScriptIcon {...iconStyles} />;
  }
};

const Icon = ({
  idx,
  isDesktop,
  children,
}: {
  idx: number;
  isDesktop?: boolean;
  children: React.ReactNode;
}) => {
  if (isDesktop) {
    if (idx === 0) return null;
    return <span>&sdot;</span>;
  }

  return <>{children}</>;
};

const LinkList = ({ isDesktop, links }: { isDesktop?: boolean; links: Props["links"] }) => (
  <>
    {links &&
      links.map((link, idx) => (
        <Stack inline align="center">
          <Icon isDesktop={isDesktop} idx={idx}>
            <LinkIcon name={link} />
          </Icon>
          <TextLink noUnderline type="secondary" href={`/${link.toLowerCase()}`}>
            {link}
          </TextLink>
        </Stack>
      ))}
  </>
);

const Links = ({
  links = ["Components", "Foundation", "Tokens", "Guides", "Accessibility"],
}: Props) => {
  return (
    <>
      <Hide on={["smallMobile", "mediumMobile", "largeMobile", "tablet"]}>
        <Stack align="center" inline>
          <LinkList links={links} isDesktop />
        </Stack>
      </Hide>
      <Hide on={["desktop", "largeDesktop"]}>
        <Popover
          placement="top-end"
          content={
            <Stack direction="column">
              <LinkList links={links} />
            </Stack>
          }
        >
          <Button type="white" circled iconLeft={<MenuHamburger />} />
        </Popover>
      </Hide>
    </>
  );
};

export default Links;
