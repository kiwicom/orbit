import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Wrapper, { WrapperDesktop, WrapperMobile } from "./primitives/Wrapper";
import Collapse from "./primitives/Collapse";
import Category from "./primitives/Category";
import Link from "./primitives/Link";
import useDevMode from "../../hooks/useDevMode";

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

type NavigationItem =
  | {
      type: "branch";
      name: string;
      items: Navigation;
    }
  | {
      type: "leaf";
      name: string;
      url: string;
    };

type Navigation = NavigationItem[];

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

function getItemKey(item: NavigationItem) {
  if (item.type === "branch") {
    return `${item.type}-${item.name}`;
  }
  return item.url;
}

function DocNavigationItem({
  devMode,
  currentUrl,
  level,
  item,
}: {
  devMode: boolean;
  currentUrl: string;
  level: number;
  item: NavigationItem;
}) {
  const [expanded, setExpanded] = React.useState(
    level === 1 &&
      item.type === "branch" &&
      item.items.some(it =>
        it.type === "leaf"
          ? currentUrl.startsWith(it.url)
          : it.items.some(i => i.type === "leaf" && currentUrl.startsWith(i.url)),
      ),
  );

  if (item.type === "branch") {
    const hasCategories = item.items[0].type === "branch";
    const navigationItems = item.items.map(it => (
      <DocNavigationItem
        key={getItemKey(it)}
        devMode={devMode}
        item={it}
        level={level + 1}
        currentUrl={currentUrl}
      />
    ));

    if (level === 1) {
      return (
        <Collapse
          label={item.name}
          expanded={expanded}
          hasCategories={hasCategories}
          onClick={() => setExpanded(prev => !prev)}
        >
          {navigationItems}
        </Collapse>
      );
    }

    if (level === 2) {
      return <Category name={item.name}>{navigationItems}</Category>;
    }
  } else {
    return (
      <Link
        to={devMode && item.url.startsWith("/components/") ? `${item.url}react/` : item.url}
        active={currentUrl.startsWith(item.url)}
        level={level}
      >
        {item.name}
      </Link>
    );
  }

  return null;
}

interface Props {
  currentUrl: string;
}

export default function DocNavigation({ currentUrl }: Props) {
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
        />
      ))}
    </>
  );

  return (
    <Wrapper>
      <WrapperMobile>{navigation}</WrapperMobile>
      <WrapperDesktop>{navigation}</WrapperDesktop>
    </Wrapper>
  );
}
