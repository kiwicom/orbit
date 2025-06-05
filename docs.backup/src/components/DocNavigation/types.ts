export type NavigationItemStatus = "wip" | "new" | "deprecated" | "experimental";
export type Navigation = NavigationItem[];
export type NavigationItem =
  | {
      type: "branch";
      name: string;
      url: string;
      status?: NavigationItemStatus;
      items: Navigation;
    }
  | {
      type: "leaf";
      name: string;
      hasReactTab: boolean;
      url: string;
      status?: NavigationItemStatus;
    };
