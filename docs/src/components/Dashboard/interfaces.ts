// TODO: use types from tracking cli tool after move to monorepo
export interface TrackingProperty {
  name: string;
  used: number;
}
export interface TrackingProp {
  used: number;
  name: string;
  values?: TrackingProperty[];
}

interface Maintainer {
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

export interface TrackedData {
  name: string;
  icon: boolean;
  instances: number;
  slug: string;
  category: string;
  isDeprecated: boolean;
  props: TrackingProp[];
  sources: Array<{ url: string; props: string[] }>;
}
export interface TrackingNode {
  name: string;
  url: string;
  createdAt: string;
  description: string;
  orbitVersion: string;
  fields: {
    currentComponents: string[];
  };
  lastCommit: {
    sha: string;
    title: string;
    webUrl: string;
  };
  members: {
    maintainers: Maintainer[];
  };
  trackedData: TrackedData[];
}

export interface SchemeTrackingNode {
  allTracking: {
    nodes: TrackingNode[];
  };
}
