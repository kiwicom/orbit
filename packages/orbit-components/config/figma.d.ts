export interface User {
  id: string;
  handle: string;
  img_url: string;
}

export interface ContainingFrame {
  name: string;
  nodeId: string;
  pageId: string;
  pageName: string;
  backgroundColor: string;
  containingStateGroup: { name: string; nodeId: string };
}

export interface Component {
  key: string;
  file_key: string;
  node_id: string;
  thumbnail_url: string;
  name: string;
  description: string;
  description_rt: string;
  created_at: string;
  updated_at: string;
  containing_frame: ContainingFrame;
  user: User;
}

export interface FigmaComponents {
  error: boolean;
  status: number;
  meta: {
    components: Component[];
  };
  i18n: null;
}
