import axios from "axios";

import { projectPathQuery, projectRawBlobQuery } from "./queries";
import { TrackingNode } from "../../../src/components/Dashboard/interfaces";

const BASE_URL = `https://gitlab.skypicker.com/api/graphql/`;

interface PathResponse {
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

interface BlobResponse {
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

async function request<T>(query: string, vars?: Record<string, string | number | string[]>) {
  const { data } = await axios.post<T>(
    BASE_URL,
    {
      query,
      variables: vars,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITLAB_TOKEN}`,
      },
    },
  );

  return data;
}

export default async ({ actions, createNodeId, createContentDigest, reporter }) => {
  try {
    const { createNode } = actions;

    if (process.env.GATSBY_ORBIT_STORAGE_PATH) {
      const pathsRes = await request<PathResponse>(projectPathQuery, {
        path: process.env.GATSBY_ORBIT_STORAGE_PATH,
      });

      if (pathsRes) {
        const paths = pathsRes.data.project.repository.tree.blobs.nodes
          .map(b => b.path)
          .filter(n => n.includes(".json"));

        request<BlobResponse>(projectRawBlobQuery, {
          path: process.env.GATSBY_ORBIT_STORAGE_PATH,
          paths,
          last: 1,
        }).then(({ data }) => {
          const { nodes } = data.project.repository.blobs;
          JSON.parse(nodes[0].rawBlob).forEach((repo: TrackingNode) => {
            createNode({
              ...repo,
              id: createNodeId(`tracking-${repo.name}`),
              parent: null,
              children: [],
              internal: {
                type: `Tracking`,
                content: JSON.stringify(repo),
                contentDigest: createContentDigest(repo),
              },
            });
          });
        });
      }
    }
  } catch (err) {
    console.error(err);
    reporter.panicOnBuild(err);
  }
};
