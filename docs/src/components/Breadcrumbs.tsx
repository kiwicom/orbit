import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledList = styled.ul`
  display: flex;
  font-size: calc(1em - 2px);
  margin-bottom: ${({ theme }) => theme.orbit.spaceMedium};
`;

const StyledListItem = styled.li<{ current: boolean }>`
  a,
  span {
    color: ${({ theme, current }) =>
      current ? theme.orbit.colorTextLinkPrimary : theme.orbit.colorTextSecondary};
    margin-right: ${({ theme }) => theme.orbit.spaceXSmall};
  }
`;

interface Props {
  trail: Array<{
    name: string;
    url: string;
  }>;
}

const Breadcrumbs = ({ trail }: Props) => {
  const root = { name: "Orbit.kiwi", url: "/" };
  const fullTrail = [root, ...trail];
  return (
    <StyledList role="navigation" aria-label="breadcrumbs">
      {fullTrail.map(({ name, url }, i) => {
        const current = i === fullTrail.length - 1;
        return (
          <StyledListItem key={url} current={current}>
            <Link to={url} aria-label={name} aria-current={current && "page"}>
              {name}
            </Link>
            {i + 1 !== fullTrail.length && <span>/</span>}
          </StyledListItem>
        );
      })}
    </StyledList>
  );
};

export default Breadcrumbs;
