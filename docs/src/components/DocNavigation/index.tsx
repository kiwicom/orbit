import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as _ from "lodash";

import StyledWrapper, {
  StyledWrapperDesktop,
  StyledWrapperMobile,
} from "./primitives/StyledWrapper";
import DocNavigationItem, { getItemKey } from "./DocNavigationItem";
import useDevMode from "../../hooks/useDevMode";
import { Navigation, NavigationItem } from "./types";

export type Breadcrumbs = Array<{
  name: string;
  url: string;
  hasReactTab: boolean;
}>;

interface QueryData {
  allMdx: {
    nodes: Array<{
      id: string;
      fields: {
        tabCollection: string | null;
        breadcrumbs: Breadcrumbs;
      };
      parent: {
        name: string;
      };
    }>;
  };
}

export function groupBreadcrumbs(breadcrumbs: {
  components: Breadcrumbs;
  content: Breadcrumbs[];
}): Navigation {
  // https://stackoverflow.com/a/57344801/1247274
  const result: Navigation = [];
  const level = { result };

  breadcrumbs.content.forEach(content => {
    content.reduce((acc, { name, url, hasReactTab }, index) => {
      if (!acc[name]) {
        acc[name] = { result: [] };
        if (index < content.length - 1) {
          acc.result.push({ type: "branch", name, url, items: acc[name].result });
        } else {
          acc.result.push({ type: "leaf", name, url, hasReactTab });
        }
      }
      return acc[name];
    }, level);
  });

  const componentItems: NavigationItem[] = breadcrumbs.components.map(
    ({ name, url, hasReactTab }) => ({
      type: "leaf",
      name,
      url,
      hasReactTab,
    }),
  );

  result.splice(2, 0, {
    type: "branch",
    name: "Components",
    url: "/components/",
    items: _.sortBy(componentItems, ["name"]),
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
        filter: { fields: { collection: { eq: "documentation" } } } # sort: { internal: contentFilePath }
      ) {
        nodes {
          id
          internal {
            contentFilePath
          }
          fields {
            tabCollection
            breadcrumbs {
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

  const breadcrumbs = data.allMdx.nodes
    .filter(node => !node.fields.tabCollection || node.parent.name.startsWith("01-"))
    .map(node =>
      node.fields.breadcrumbs.map((t, i) => {
        if (i === node.fields.breadcrumbs.length - 1) {
          return {
            ...t,
            hasReactTab: data.allMdx.nodes.some(
              n =>
                n.fields.tabCollection === node.fields.tabCollection &&
                n.fields.breadcrumbs[n.fields.breadcrumbs.length - 1].url.endsWith("/react/"),
            ),
          };
        }
        return t;
      }),
    )
    .reduce(
      (acc: { content: Breadcrumbs[]; components: Breadcrumbs }, cur: Breadcrumbs) => {
        if (cur[0].name === "Components") acc.components.push(cur.slice(-1)[0]);
        else acc.content.push(cur);
        return acc;
      },
      { content: [], components: [] },
    );

  const navigation = (
    <>
      {groupBreadcrumbs(breadcrumbs).map(item => (
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
