import type { Option } from "./types";

function separateGroupedAndUngrouped(options: Option[]): {
  grouped: Option[][];
  ungrouped: Option[];
} {
  const { groups, ungrouped } = options.reduce<{
    groups: { [group: string]: Option[] };
    ungrouped: Option[];
  }>(
    (acc, option) => {
      const { group } = option;

      if (group) {
        if (!acc.groups[group]) {
          acc.groups[group] = [];
        }
        acc.groups[group].push(option);
      } else {
        acc.ungrouped.push(option);
      }

      return acc;
    },
    { groups: {}, ungrouped: [] },
  );

  const grouped: Option[][] = Object.values(groups);

  return { grouped, ungrouped };
}

export function groupOptions(
  options: Option[],
  showAll: boolean,
  prevSelected?: Option,
): { groups: Option[][]; all: Option[]; flattened: Option[] } {
  const { grouped, ungrouped } = separateGroupedAndUngrouped(options);

  if (prevSelected) {
    grouped.unshift([prevSelected]);
  }

  const flattenedGroups = grouped.reduce((acc, group) => [...acc, ...group], []);
  const flattened = showAll ? [...flattenedGroups, ...options] : [...flattenedGroups, ...ungrouped];

  return {
    groups: grouped,
    all: options,
    flattened,
  };
}
