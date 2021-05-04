export type Navigation = NavigationItem[];
export type NavigationItem =
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
