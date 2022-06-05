type AccessLevel =
  | "NO_ACCESS"
  | "MINIMAL_ACCESS"
  | "GUEST"
  | "REPORTER"
  | "DEVELOPER"
  | "MAINTAINER"
  | "OWNER";

export type Scope =
  | "booking"
  | "smart-faq"
  | "search"
  | "frontend"
  | "account"
  | "mmb"
  | "core"
  | "balkan";

export interface User {
  id?: string;
  name: string;
  avatarUrl: string;
  bot: boolean;
  state: "active" | "blocked" | "deactivated";
  webUrl: string;
  webPath: string;
  publicEmail: string;
  status: null | {
    message: string;
    availability: "NOT_SET" | "BUSY";
  };
}

export interface ProjectMember {
  id: string;
  accessLevel: {
    stringValue: AccessLevel;
  };
  user: User;
}

export interface ProjectNode {
  id: string;
  name: string;
  description: string;
  sshUrlToRepo: string;
  httpUrlToRepo: string;
  repository: {
    tree: {
      lastCommit: {
        title: string;
        sha: string;
        webUrl: string;
      };
    };
  };
  projectMembers: {
    nodes: ProjectMember[];
  };
}

export interface ProjectsQuery {
  data: {
    projects: {
      nodes: ProjectNode[];
    };
  };
}

export interface Instance {
  importInfo: {
    imported: string;
    local: string;
    moduleName: string;
    importType: string;
  };
  props: Record<string, string | number>;
  propsSpread: boolean;
  location: {
    file: string;
    start: {
      line: number;
      column: number;
    };
  };
}

export interface Component {
  instances: Instance[];
}

export type ComponentInstance = Record<string, Component>;

export interface PropValue {
  name: string;
  used: number;
}

export interface Prop {
  name: string;
  used: number;
  values: PropValue;
}

export interface OutputComponentInfo {
  name: string;
  instances: number;
  sources: string[];
  props: Prop[];
  category: string;
  isDeprecated: boolean;
  icon: boolean;
}

interface Source {
  url: string;
  props: Array<{ name: string | null; value: string | number | null }>;
}
interface OutputInstance {
  instances: number;
  sources: Source[];
  category: string;
  icon: boolean;
  props: Prop;
  isDeprecated: boolean;
}

export type TrackedDataType = Record<string, OutputInstance>;
