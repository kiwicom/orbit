import React from "react";
import { Stack, Badge } from "@kiwicom/orbit-components";

import Category from "./primitives/Category";
import Link from "./primitives/Link";
import Collapse from "./Collapse";
import { NavigationItem, NavigationItemStatus } from "./types";

function getBadgeType(
  itemStatus: NavigationItemStatus,
): React.ComponentProps<typeof Badge>["type"] {
  switch (itemStatus) {
    case "wip":
      return "warning";
    case "new":
      return "success";
    case "deprecated":
      return "critical";
    default:
      return "info";
  }
}

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
  const initialExpanded = level === 1 && item.type === "branch" && currentUrl.startsWith(item.url);
  const [expanded, setExpanded] = React.useState(initialExpanded);
  const itemName = item.status ? (
    <Stack flex align="center" spacing="200">
      <div>{item.name}</div>
      <Badge type={getBadgeType(item.status)}>{item.status.toUpperCase()}</Badge>
    </Stack>
  ) : (
    item.name
  );

  React.useEffect(() => {
    if (!expanded && level === 1 && onCollapse) {
      setTimeout(onCollapse, 200); // 200ms for transition
    }
  }, [expanded, level, onCollapse]);

  if (item.type === "branch") {
    const hasCategories = item.items[0].type === "branch";
    const navigationItems = item.items.map(it => (
      <DocNavigationItem
        key={getItemKey(it)}
        devMode={devMode}
        item={it}
        level={level + 1}
        currentUrl={currentUrl}
        onCollapse={onCollapse}
      />
    ));

    if (level === 1) {
      return (
        <Collapse
          label={itemName}
          expanded={expanded}
          hasCategories={hasCategories}
          onClick={() => setExpanded(prev => !prev)}
        >
          {navigationItems}
        </Collapse>
      );
    }

    if (level === 2) {
      return <Category title={itemName}>{navigationItems}</Category>;
    }
  } else {
    return (
      <Link
        to={devMode && item.hasReactTab ? `${item.url}react/` : item.url}
        isActive={currentUrl.startsWith(item.url)}
        onClick={onCollapse}
      >
        {item.name}
      </Link>
    );
  }

  return null;
}
