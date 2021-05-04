import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import StyledWrapper, {
  StyledWrapperDesktop,
  StyledWrapperMobile,
} from "./primitives/StyledWrapper";
import DocNavigationItem, { getItemKey } from "./DocNavigationItem";
import useDevMode from "../../hooks/useDevMode";
import { Navigation } from "./types";

type Trail = Array<{
  name: string;
  url: string;
}>;

interface QueryData {
  allMdx: {
    nodes: Array<{
      id: string;
      fields: {
        tabCollection: string | null;
        trail: Trail;
      };
      parent: {
        name: string;
      };
    }>;
  };
}

export function groupTrails(trails: Trail[]): Navigation {
  // https://stackoverflow.com/a/57344801/1247274
  const result: Navigation = [];
  const level = { result };
  trails.forEach(trail => {
    trail.reduce((acc, { name, url }, index) => {
      if (!acc[name]) {
        acc[name] = { result: [] };
        if (index < trail.length - 1) {
          acc.result.push({ type: "branch", name, items: acc[name].result });
        } else {
          acc.result.push({ type: "leaf", name, url });
        }
      }
      return acc[name];
    }, level);
  });
  return result;
}

interface Props {
  currentUrl: string;
  onCollapse?: () => void;
}

export default function DocNavigation({ currentUrl, onCollapse }: Props) {
  const [devMode] = useDevMode();
  const data: QueryData = useStaticQuery(graphql`
    query NavigationItems {
      allMdx(
        filter: { fields: { collection: { eq: "documentation" } } }
        sort: { fields: fileAbsolutePath }
      ) {
        nodes {
          id
          fields {
            tabCollection
            trail {
              name
              url
            }
          }
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  `);

  const trails = data.allMdx.nodes
    .filter(node => !node.fields.tabCollection || node.parent.name.startsWith("01-"))
    .map(node => node.fields.trail);

  const navigation = (
    <>
      {groupTrails(trails).map(item => (
        <DocNavigationItem
          devMode={devMode}
          key={getItemKey(item)}
          item={item}
          level={1}
          currentUrl={currentUrl}
          onCollapse={onCollapse}
        />
      ))}
    </>
  );

  return (
    <StyledWrapper>
      <StyledWrapperMobile>{navigation}</StyledWrapperMobile>
      <StyledWrapperDesktop>{navigation}</StyledWrapperDesktop>
    </StyledWrapper>
  );
}
