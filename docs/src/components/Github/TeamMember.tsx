import React from "react";
import { Stack } from "@kiwicom/orbit-components";
import styled from "styled-components";
import { Twitter, Link as LinkIcon } from "@kiwicom/orbit-components/icons";
import Github from "@icons-pack/react-simple-icons/lib/components/Github";
import Dribbble from "@icons-pack/react-simple-icons/lib/components/Dribbble";

import { Contributor } from ".";

const StyledHeading = styled.h4`
  color: ${({ theme }) => theme.orbit.colorHeading};
  font-size: calc(1em + 2px);
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold};
  width: 100%;
  line-height: 1.2;
`;

const StyledLink = styled.a.attrs(() => ({
  rel: "noopener noreferrer",
  target: "_blank",
}))`
  svg {
    height: 16px;
    width: 16px;
  }
`;

const StyledInfo = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.orbit.colorTextPrimary};
`;

interface Props extends Contributor {
  image: React.ReactNode;
}

const TeamMember = ({ position, image, info, twitter, website, dribbble, github, name }: Props) => {
  const links = [
    { url: twitter, icon: <Twitter /> },
    { url: website, icon: <LinkIcon /> },
    { url: dribbble, icon: <Dribbble /> },
    { url: github, icon: <Github /> },
  ];

  return (
    <Stack
      inline
      direction="column"
      spacing="large"
      align="center"
      largeMobile={{ direction: "row", align: "stretch" }}
    >
      {image}
      <Stack flex shrink direction="column" spacing="medium">
        <StyledHeading>
          {name}, {position}
        </StyledHeading>
        <StyledInfo>{info}</StyledInfo>
        <Stack inline spacing="medium" align="center">
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
