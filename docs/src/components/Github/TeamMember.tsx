import React from "react";
import { Stack } from "@kiwicom/orbit-components";
import styled from "styled-components";
import { X, Link as LinkIcon } from "@kiwicom/orbit-components/icons";
import { SiDribbble as Dribbble, SiGithub as Github } from "@icons-pack/react-simple-icons";

import { Contributor } from ".";

const StyledHeading = styled.h4`
  color: ${({ theme }) => theme.orbit.headingForeground};
  font-size: calc(1em + 2px);
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold};
  width: 100%;
  line-height: 1.2;
`;

const StyledLink = styled.a.attrs(() => ({
  rel: "noopener noreferrer",
  target: "_blank",
}))<React.AnchorHTMLAttributes<HTMLAnchorElement>>`
  svg {
    height: 16px;
    width: 16px;
  }
`;

const StyledInfo = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.orbit.textPrimaryForeground};
`;

interface Props extends Contributor {
  image: React.ReactNode;
}

const TeamMember = ({ position, image, info, twitter, website, dribbble, github, name }: Props) => {
  const links = [
    { url: twitter, icon: <X ariaHidden /> },
    { url: website, icon: <LinkIcon ariaHidden /> },
    { url: dribbble, icon: <Dribbble ariaHidden /> },
    { url: github, icon: <Github ariaHidden /> },
  ];

  return (
    <Stack
      inline
      direction="column"
      spacing="600"
      align="center"
      largeMobile={{ direction: "row", align: "stretch" }}
    >
      {image}
      <Stack flex shrink direction="column" spacing="400">
        <StyledHeading>
          {name}, {position}
        </StyledHeading>
        <StyledInfo>{info}</StyledInfo>
        <Stack inline spacing="400" align="center">
          {links.map(({ icon, url }) => {
            return (
              url && (
                <StyledLink key={url} href={url}>
                  {icon}
                </StyledLink>
              )
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TeamMember;
