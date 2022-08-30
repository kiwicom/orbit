import { projectPathQuery, projectRawBlobQuery } from "./queries";
import { TrackingNode } from "../../../src/components/Dashboard/interfaces";
import { request } from "../helpers";

const getPaths = async () => {
  const { data } = await request<PathResponse>(projectPathQuery, {
    path: process.env.GATSBY_ORBIT_STORAGE_PATH || "",
  });

  if (data) return data;

  return null;
};

const getBlobs = async ({
  paths,
  first,
  last,
}: {
  paths: string[];
  first?: number;
  last?: number;
}) => {
  const { data } = await request<BlobResponse>(projectRawBlobQuery, {
    path: process.env.GATSBY_ORBIT_STORAGE_PATH || "",
    paths,
    // @ts-expect-error expected
    first,
    // @ts-expect-error expected
    last,
  });

  if (data && data.project) return data.project.repository.blobs.nodes;

  return null;
};

export interface PathResponse {
  data: {
    project: {
      repository: {
        tree: {
          blobs: {
            nodes: Array<{ path: string }>;
          };
        };
      };
    };
  };
}

export interface BlobResponse {
  data: {
    project: {
      repository: {
        blobs: {
          nodes: Array<{ rawBlob: string; fileType: string | null }>;
        };
      };
    };
  };
}

export default async ({ actions, createNodeId, createContentDigest, reporter }) => {
  try {
    const { createNode } = actions;
    const pathsRes = await getPaths();

    if (process.env.GATSBY_ORBIT_STORAGE_PATH) {
      if (pathsRes) {
        const paths = pathsRes.project.repository.tree.blobs.nodes
          .map(b => b.path)
          .filter(n => n.includes(".json"));
        const lastData = await getBlobs({ paths, last: 1 });
        const firstData = await getBlobs({ paths, first: 1 });

        if (lastData && firstData) {
          [...JSON.parse(firstData[0].rawBlob), ...JSON.parse(lastData[0].rawBlob)].forEach(
            (repo: TrackingNode) => {
              createNode({
                ...repo,
                // it will not create the node if it has the same id as the previous one
                id: createNodeId(`tracking-${repo.createdAt}-${repo.name}`),
                parent: null,
                children: [],
                internal: {
                  type: `Tracking`,
                  content: JSON.stringify(repo),
                  contentDigest: createContentDigest(repo),
                },
              });
            },
          );
        }
      }
    }
  } catch (err) {
    console.error(err);
    reporter.panicOnBuild(err);
  }
};
