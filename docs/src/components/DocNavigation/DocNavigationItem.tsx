import React from "react";
import useTheme from "@kiwicom/orbit-components/lib/hooks/useTheme";

import Category from "./Category";
import StyledLink from "./primitives/StyledLink";
import Collapse from "./Collapse";
import { NavigationItem } from "./types";

export function getItemKey(item: NavigationItem) {
  if (item.type === "branch") {
    return `${item.type}-${item.name}`;
  }
  return item.url;
}

interface Props {
  devMode: boolean;
  currentUrl: string;
  level: number;
  item: NavigationItem;
  onCollapse?: () => void;
}

export default function DocNavigationItem({ devMode, currentUrl, level, item, onCollapse }: Props) {
  const initialExpanded =
    level === 1 &&
    item.type === "branch" &&
    item.items.some(it =>
      it.type === "leaf"
        ? currentUrl.startsWith(it.url)
        : it.items.some(i => i.type === "leaf" && currentUrl.startsWith(i.url)),
    );
  const [expanded, setExpanded] = React.useState(initialExpanded);
  const theme = useTheme();
  const firstRenderRef = React.useRef<boolean>(true);

  React.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    if (!expanded && level === 1) {
      if (onCollapse) {
        setTimeout(() => {
          onCollapse();
        }, parseFloat(theme.orbit.durationFast) * 1000); // the duration of Slide transition
      }
    }
  }, [expanded, level, theme.orbit.durationFast, onCollapse]);

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
      <StyledLink
        to={devMode && item.url.startsWith("/components/") ? `${item.url}react/` : item.url}
        active={currentUrl.startsWith(item.url)}
        level={level}
      >
        {item.name}
      </StyledLink>
    );
  }

  return null;
}
