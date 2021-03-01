import React from "react";
import styled from "styled-components";
import { WindowLocation } from "@reach/router";
import { Link } from "gatsby";

import { capitalize } from "../utils/common";

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
  location: WindowLocation;
}

const Breadcrumbs = ({ location }: Props) => {
  const createLink = (name: string, url: string) => ({
    name: name.replace(/-/g, " "),
    url: url.split(",").join("/"),
  });

  const { pathname } = location;

  const allExceptFirst = pathname
    .split("/")
    .filter(Boolean)
    .map((cur, i, arr) => createLink(capitalize(cur), `/${arr.slice(0, i + 1)}`));

  const allLinks = [createLink("Orbit.kiwi", "/")].concat(allExceptFirst);

  return (
    <StyledList role="navigation" aria-label="breadcrumbs">
      {allLinks.map(({ name, url }, i) => {
        const current = `${url}/` === pathname;
        return (
          <StyledListItem current={current}>
            <Link to={url} aria-label={name} aria-current={current && "page"}>
              {name}
            </Link>
            {i + 1 !== allLinks.length && <span>/</span>}
          </StyledListItem>
        );
      })}
    </StyledList>
  );
};

export default Breadcrumbs;
